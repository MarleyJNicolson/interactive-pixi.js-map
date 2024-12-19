export default async function ({ req, route, redirect }) {

    try {

      // Handle Redirections from Redirections Single Type in Strapi
      //Api Call
      const response = await fetch(
        'https://api.mwek.com/api/redirect?populate=*'
      ).then((res) => {
        return res.json();
      });

      const redirections = response.data.attributes.OnqorRedirects

      //Redirections
      redirections.forEach((rule) => {

        if (route.path === rule.from) {
            redirect(Number(rule.statusCode), rule.to)
        }
      });
      
      //Redirect upperCase URL to lowerCase version
      const lowercaseUrl = route.path.toLowerCase();

      if (lowercaseUrl !== route.path) {
        return redirect(301, lowercaseUrl);
      }

      const host = req.headers.host;
      console.log(host)
      const isWWW = /^www\./i.test(host);
    
      if (isWWW) {
        // Remove the "www" prefix from the host
        const newHost = host.replace(/^www\./i, '');
        
        // Redirect to the non-www version
        redirect(301, `https://${newHost}${req.url}`);
      }
    } catch (error) {
      // Handle error if fetching redirection rules fails
      console.error('Failed to fetch redirection rules:', error);
    }
}