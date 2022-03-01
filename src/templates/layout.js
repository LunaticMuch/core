const { html } = require('@popeindustries/lit-html-server');

module.exports = (navigation, content, title, assets) => html`
<!DOCTYPE html>
<html>

<head>
    <title>${title}</title>
    <link href="../output.css" rel="stylesheet" />
</head>

<body class="bg-gray-100 font-sans leading-normal tracking-normal">
<div class="flex md:flex-row-reverse flex-wrap">
  <!--Sidebar-->
  <div
    class="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-left fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
    <div class="md:relative mx-auto lg:float-right lg:px-6">
      ${navigation}
    </div>
  </div>

  <div class="w-full md:w-4/5 bg-gray-100">
    <div class="container bg-gray-100 pt-16 px-6">${content}</div>
  </div>
</div>
</body>

</html>
`;
