export default ({ app }) => {
    if (process.client) {
      window.pagesense=window.pagesense||function(){(pagesense.q=pagesense.q||[]).push(arguments);};pagesense.l=+new Date;
      var z=document.createElement("script");
      z.type="text/javascript";
      z.async=true;
      z.src="https://cdn-eu.pagesense.io/js/onqor/23fd815eda9a4235aa61eae9b9b1f975.js";
      var s=document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(z,s);
    }
  };