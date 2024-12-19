const { create, fragment } = require('xmlbuilder2');
const fs = require('fs');
const fetch = require('node-fetch');
const axios = require('axios');
const root = create().ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });


var rootUrl = 'https://mwek.com'

var pageArray = [];

// const response = await this.$axios.get('https://api.mwek.com/api/pages');
// const pages = response.data.pages;
// 

async function fetchData() {

    root.ele('url')
        .ele('loc').txt(rootUrl + '/').up()
        .ele('priority').txt('1.0').up()
    .up()
    .doc();

    // main pages
    const page = await fetch('https://api.mwek.com/api/pages').then((res) => {
        return res.json();
    });
    var pageArray = page.data;
    pageArray.forEach(url => {
        root.ele('url')
          .ele('loc').txt(rootUrl + '/' + url.attributes.slug).up()
          .ele('priority').txt('0.9').up()
        .up()
        .doc();
    });

    // service pages
    const services = await fetch('https://api.mwek.com/api/services').then((res) => {
        return res.json();
    });
    var servicesArray = services.data;
    servicesArray.forEach(url => {
        root.ele('url')
          .ele('loc').txt(rootUrl + '/services/' + url.attributes.slug).up()
          .ele('priority').txt('0.85').up()
        .up()
        .doc();
    });

    // blog individual pages
    const blogs = await fetch('https://api.mwek.com/api/blogs?populate=deep,3').then((res) => {
        return res.json();
    });
    var blogArray = blogs.data;
    blogArray.forEach(url => {
        root.ele('url')
          .ele('loc').txt(rootUrl + '/blog/' + url.attributes.PrimaryCategory.category.data.attributes.slug + '/' + url.attributes.slug).up()
          .ele('priority').txt('0.8').up()
        .up()
        .doc();
    });


    const xmlString = root.end({ prettyPrint: true });

    // // fs.writeFileSync('sitemap.xml', xmlString);
    fs.writeFileSync('static/sitemap.xml', xmlString);

}
module.exports = fetchData;





// const doc = create({ version: '1.0' })
//   .ele('root', { att: 'val' })
//     .ele('foo')
//       .ele('bar').txt('foobar').up()
//     .up()
//     .ele('baz')
//     .doc();

// urls.forEach(url => {
//     // 
//     // const urlElement = root.ele('url');
//     root.ele('root', { att: 'val' })
//     .ele('foo')
//       .ele('bar').txt('foobar').up()
//     .up()
//     .ele('baz')
//     .doc();
// });



