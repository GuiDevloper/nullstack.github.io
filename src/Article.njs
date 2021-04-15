import Nullstack from 'nullstack';
import './Article.scss';
import {existsSync, readFileSync} from 'fs';
import prismjs from 'prismjs';
import {Remarkable} from 'remarkable';
import meta from 'remarkable-meta';
import YAML from 'yaml';

class Article extends Nullstack {

  title = '';
  html = '';

  static async getArticleByKey({locale, key}) {
    await import('prismjs/components/prism-jsx.min');
    let path = `i18n/${locale}/articles/${key}.md`;
    if(!existsSync(path)) {
      path = `i18n/${locale}/articles/404.md`;
    }
    const text = readFileSync(path, 'utf-8');
    const md = new Remarkable({
      highlight: (code) => Prism.highlight(code, prismjs.languages.jsx, 'javascript')
    });
    md.use(meta);
    md.use((md) => {
      const originalRender = md.renderer.rules.link_open;
      md.renderer.rules.link_open = function() {
        let result = originalRender.apply(null, arguments);
        const regexp = /href="([^"]*)"/;
        const href = regexp.exec(result)[1];
        if(!href.startsWith('/')) {
          result = result.replace('>', ' target="_blank" rel="noopener">');
        }
        return result;
      };
    });
    md.use((md) => {
      md.renderer.rules.heading_open = function (tokens, i) {
        const {content} = tokens[i+1];
        const {hLevel} = tokens[i];
        const id = content.toLowerCase().split(/[^a-z]/).join('-');
        return `<h${hLevel} id="${id}"><a href="#${id}">`;
      }
      md.renderer.rules.heading_close = function (tokens, i) {
        const {hLevel} = tokens[i];
        return `</a></h${hLevel}>`;
      }
    });
    return {
      html: md.render(text),
      ...md.meta
    }
  }

  static async getArticlesList({locale}) {
    const file = readFileSync(`i18n/${locale}/components/Documentation.yml`, 'utf-8');
    return YAML.parse(file);
  }

  async initiate({project, page, locale, params}) {
    const article = await this.getArticleByKey({key: params.slug, locale});
    Object.assign(this, article);
    const { topics } = await this.getArticlesList({locale});
    this.topics = topics
    page.title = `${article.title} - ${project.name}`;
    page.description = article.description;
    if(article.status) {
      page.status = 404;
    }
  }

  renderLink({ title, href }) {
    return (
      <a href={href} class="text-gray-500 hover:text-pink-600 block w-full"> {title} </a>
    )
  }

  renderTopic({ title, links }) {
    return (
      <div class="mb-3">
        <h5> {title} </h5>
        <nav>
          {links.map((link) => <Link {...link} />)}
        </nav>
      </div>
    )
  }
  
  render() {
    return (
      <section class="max-w-screen-xl mx-auto px-4 flex flex-wrap sm:flex-nowrap py-16">
        <aside class="w-full sm:w-80 pr-4">
          {this.topics?.map((topic) => <Topic {...topic} />)}
        </aside>
        <article class="w-full">
          <h1 class="text-gray-900 text-4xl font-light block mb-8"> {this.title} </h1>
          <div html={this.html} class="prose max-w-none" />
        </article>
      </section>
    )
  }

}

export default Article;