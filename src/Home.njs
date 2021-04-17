import Translatable from './Translatable';
import Snippet from "./Snippet";

class Home extends Translatable {
  renderHero() {
    return (
      <section class="max-w-screen-xl mx-auto px-4 flex justify-between items-center flex-wrap">
        <div class="sm:w-5/12 grid gap-8 mt-12 sm:mt-0">
          <h1 class="w-full">
            <span class="text-pink-600 text-4xl sm:text-6xl font-light block sm:mb-3">
              {this.i18n.hero.heading}
            </span>
            <span class="text-pink-600 text-3xl sm:text-5xl font-light block sm:mb-3">
              {this.i18n.hero.subHeading}
            </span>
            <span class="text-gray-900 text-2xl sm:text-4xl font-light block">
              {this.i18n.hero.tagline}
            </span>
          </h1>
          <>
            {this.i18n.hero.descriptions.map(description => 
              <p class="text-xl sm:text-2xl">
                {description}
              </p>
            )}
          </>
          <div>
            <button class="bg-pink-600 text-white px-6 py-4 border border-pink-600 hover:bg-white hover:text-pink-600 inline-block">
              {this.i18n.hero.callToAction}
            </button>
          </div>
        </div>
        <div class="bg-center bg-0 hover:bg-100 bg-repeat-y mt-6" style="background-image: url(/stars.png); transition: background-size 3s;">
          <img src="/hero.png" alt="Nulla-Chan" class="max-w-full" />
        </div>
      </section>
    );
  }

  renderRole({ image, title, text }) {
    return (
      <div class="sm:w-1/3 px-8 flex flex-wrap justify-center text-center">
        <div class="bg-center bg-0 hover:bg-100" style="background-image: url(/stars.png); transition: background-size 3s;">
          <img src={image} alt={title} class="h-48 transform hover:scale-105 transition delay-100" />
        </div>
        <h2 class="w-full text-center text-pink-600 text-xl sm:text-2xl font-light mb-4 sm:px-20">
          {title}
        </h2>
        <p class="w-full text-center text-xl font-gray-600">{text}</p>
      </div>
    );
  }

  renderTrinity() {
    return (
      <section class="max-w-screen-xl mx-auto px-4 flex justify-between items-center flex-wrap py-12 sm:py-36">
        <Role image="/tanker.png" {...this.i18n.trinity.optimized} />
        <Role image="/healer.png" {...this.i18n.trinity.pwa} />
        <Role image="/damage.png" {...this.i18n.trinity.api} />
      </section>
    );
  }

  renderFeature({ snippet, image, title, text, inverted }) {
    return (
      <section class="max-w-screen-xl mx-auto px-4 flex justify-between items-center flex-wrap py-12 sm:py-36">
        <div class={`w-full sm:w-5/12 ${inverted ? 'sm:order-2' : ''}`}>
          <Snippet key={snippet} />
        </div>
        <div class="mt-12 sm:mt-0 sm:w-5/12">
          <h3 class="text-pink-600 text-xl sm:text-4xl font-light mb-4">
            {title}
          </h3>
          <p class="text-xl font-gray-600">
            {text}
          </p>
          <img src={image} alt={title} class="mt-6" />
        </div>
      </section>
    );
  }

  renderVideo({ link, title, thumbnail }) {
    return (
      <div class="w-full sm:w-1/3 p-1 flex justify-center">
        <a href={link} title={title} target="_blank" rel="noopener">
          <img src={thumbnail} alt={title} height="209" width="372" loading="lazy" />
        </a>
      </div>
    )
  }

  renderPlaylist() {
    return (
      <div>
        <section class="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-wrap py-12 sm:pt-36">
          <h2 class="text-xl sm:text-4xl font-light mb-4"> 
            {this.i18n.playlist.heading}
            <del>{this.i18n.playlist.slang}</del>
            <span class="text-pink-600">{this.i18n.playlist.realWord}</span>
          </h2>
          <div class="sm:flex items-center justify-center w-full mt-12 flex-wrap">
            {this.i18n.playlist.videos.map(video => <Video {...video} />)}
          </div>
        </section>
      </div>
    )
  }

  renderSeparator() {
    return (
      <div class="w-full max-w-screen-xl mx-auto flex justify-center items-start flex-wrap border-t-4 border-gray-200 text-center dark:opacity-10">
        <img src="/arrow.png" class="-mt-1" />
      </div>
    )
  }

  render() {
    if(!this.i18n) return false;
    return (
      <div>
        <Hero />
        <Separator />
        <Trinity />
        <Separator />
        {this.i18n.features.map(feature =>
          <>
            <Feature {...feature} />
            <Separator />
          </>
        )}
        <Playlist />
      </div>
    );
  }
}

export default Home;
