---
title: Contexto Secrets
description: O objeto secrets é um proxy no Contexto Nullstack disponível no server que você pode usar para configurar dados sensíveis para sua aplicação
---

- Tipo: `object`
- Origem: [Contexto Nullstack](/pt-br/contexto#----contexto-nullstack)
- Disponibilidade: **server**
- **readwrite** no contexto do **server**

Você pode usá-lo para configurar dados sensíveis para sua aplicação.

Chaves de `secrets` são congeladas depois da [inicialização da aplicação](/pt-br/inicializacao-da-aplicacao).

As seguintes chaves estão disponíveis no objeto:

- **development**: `object`
- **production**: `object`
- **[qualquerSegredo]**: `any`

Você pode definir chaves diferentes para as chaves `development` e `production`, obtendo assim valores diferentes para cada [ambiente](/pt-br/contexto-environment).

Caso uma chave seja definida diretamente no objeto `secrets` ela ficará disponível para ambos os ambientes.

A leitura das chaves deve ser feita diretamente do objeto `secrets`, pois o Nullstack vai retornar o valor referido de acordo com o [ambiente](/pt-br/contexto-environment).

```jsx
import Nullstack from 'nullstack';

class Application extends Nullstack {

  static async start({secrets}) {
    secrets.development.privateKey = 'SANDBOX_API_KEY';
    secrets.production.privateKey = 'PRODUCTION_API_KEY';
    secrets.endpoint = 'https://domain.com/api';
  }

  static async fetchFromApi({secrets}) {
    const response = await fetch(secrets.endpoint, {
      headers: {
        Authorization: `Bearer ${secrets.privateKey}`
      }
    });
    return await response.json();
  }

}

export default Application;
```

Qualquer chave de ambiente iniciada por NULLSTACK_SECRETS_ será mapeada para o *secrets* de seu respectivo ambiente.

> 🐱‍💻 NULLSTACK_SECRETS_PRIVATE_KEY será mapeada para `secrets.privateKey`

## Próximo passo

⚔ Aprendendo sobre o [`self` da instância](/pt-br/instancia-self).
