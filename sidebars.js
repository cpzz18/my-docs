// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial',
        },
      ],
    },
    {
      type: 'category',
      label: 'Basic PHP',
      items: [
        'basic-php/intro',       // Pengenalan PHP di atas
        'basic-php/helloworld',  // Hello World di bawahnya
        'basic-php/variable',    // Variabel di bawahnya
        'basic-php/string',   // Tipe Data di bawahnya
        'basic-php/data-null',
        'basic-php/tipe-datanumber',
        'basic-php/boolean',
        'basic-php/constant',

      ],
    },
  ],
};

export default sidebars;
