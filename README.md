# Frontend Mentor - Four Card Feature Section

Essa é uma solução para o desafio **Four Card Feature Section** do FrontEndMentor.


### O desafio

Usuários devem ser capazes de:

- Ver layouts otimizados e responsivos dependendo do tamanho de seus dispositivos
- Ver as animações para elementos interativos da página
- Usar o slider e alternar a promoção para ver os preços diferentes de acordo com os números de acesso

### Fotos

*Desktop Design*

![Desktop Design](https://imgur.com/aJcAxkd.png)

*Mobile Design*

![Mobile Design](https://imgur.com/OpVcGEk.png)


### Links

- Link da solução: [Add solution URL here](https://github.com/alvarogfn/landing-pages/tree/interactive-pricing-component)
- Link do website: [Add live site URL here](https://interactive-pricing-component-alvarogfn.netlify.app/)

## Desenvolvimento

### Built with

- HTML5 semântico 
- Variáveis CSS3
- SCSS e SASS
- Flexbox
- Javascript Factory
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - JS tooling


### O que eu aprendi

Como estilizar um slider no chrome.

```html
            <label class="traffic__amount" for="amount_traffic">
              <p>
                <span class="traffic__pageviews" id="pageviews">100K</span>
                Pageviews
              </p>
            </label>
            <input
              id="range"
              class="traffic__range"
              type="range"
              name="amount_traffic"
            />
```
```css
    &::-webkit-slider-runnable-track {
      background: linear-gradient(
        90deg,
        var(--Soft-Cyan) var(--progress),
        var(--Very-Light-Grayish-Blue) var(--progress)
      );
      border-radius: 10px;
      height: 10px;
    }
    &::-webkit-slider-thumb {
      background-color: var(--Strong-Cyan);
      background-image: url("assets/icon-slider.svg");
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 100%;
      box-shadow: 0px 15px 40px var(--Strong-Cyan);
      width: 40px;
      height: 40px;

      transform: translateY(-15px);
    }
```
```js
export default function sliderAnimation() {
  const rangeElement = document.querySelector("#range");

  const min = rangeElement.getAttribute("min");
  const max = rangeElement.getAttribute("max");

  rangeElement.value = "50%";

  rangeElement.addEventListener("input", (e) => {
    const actualValue = e.target.value;
    const percentage = (100 * actualValue) / (min * -1 + max);
    rangeElement.style.setProperty("--progress", percentage + "%");
  });
}
}
```

### Recursos úteis

- [Slider](https://www.devmedia.com.br/como-criar-um-slider-com-css-e-html/37787) - Isso me ajudou a estilizar o slider

## Autor

- Portfolio - [alvarogfn](https://alvarogfn.tech)
- Twitter - [@kasokinho](https://www.twitter.com/kasokinho)
- LinkedIn - [@alvarogfn](https://www.linkedin.com/in/alvarogfn)


## Créditos
[FrontEndMentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA)
