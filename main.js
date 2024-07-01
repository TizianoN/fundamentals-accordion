const accordionPanelList = document.getElementsByClassName('accordion-toggle');

for (const accordionPanel of accordionPanelList) {
  accordionPanel.addEventListener('click', function () {
    // nascondo tutti i pannelli
    for (const accordionPanel of accordionPanelList) {
      const accordionContent = accordionPanel.nextElementSibling;
      accordionContent.classList.add('hidden');
    }

    // mostro il pannello cliccato
    const thisContent = this.nextElementSibling;
    thisContent.classList.remove('hidden');
  });
}
