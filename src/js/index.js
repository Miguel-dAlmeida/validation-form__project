const submitButtonEl = document.getElementById("submitButton")
const formItemsEls = document.querySelectorAll(".form__item")


submitButtonEl.addEventListener("click", () => {
    /* Variável de controle */
    let isAllValid = true;

    formItemsEls.forEach((formItem) => {
        const formControl = formItem.querySelector(".form__control")

        if (formControl.value === "") {
            formItem.classList.add("form__item--invalid");
            /* Alterar o valor booleano se encaixa perfeitamente com a lógica que a aplicação necessita. A cada "click", o valor da variável isAllValid é padronizadamente "true", tornando-se "false" quando um dos elementos não estiver preenchido. 
          Logo, se o usuário clicar no botão com todos os campos preenchidos, ele não cairá nessa linha de código e, portanto, teremos o valor verdadairo implantado na variável de controle.
          Perçeba que você conseguiu descobrir se todos os elementos estão preenchidos de forma rápida e enxuta. */
            isAllValid = false;
        } else {
            /* Antes: else if (formControl.value !== "")*/
            formItem.classList.remove("form__item--invalid")
        }
    })
    /* Torna-se necessário criar dois blocos de código distintos para os comportamentos de ativo e inativo nesse caso, pois seus comportamentos são diferentes. 
        Enquanto o estado inválido é adicionado e removido individualmente de acordo com condições aplicadas ao valor encontrado no campo de texto, o estado válido é acionado mediante ao valor da variável "isAllValid".
        Como afirmado anteriormente, já conseguimos identificar se todos os elementos estão preechidos ou não. Dessa forma, basta utilizar as duas ramificações de valores possíveis para percorrer os elementos e adicionar ou remover a classe ".form__item--valid" */
    if (isAllValid === true) {
        formItemsEls.forEach((formItem) => {
            formItem.classList.add("form__item--valid")
        })
    } else {
        formItemsEls.forEach((formItem) => {
            formItem.classList.remove("form__item--valid");
        })
    }
})


