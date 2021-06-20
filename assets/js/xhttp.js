console.dir(window.XMLHttpRequest);
console.log(window.XMLDocument);
let xhttp = new XMLHttpRequest();

console.dir(xhttp);
console.log(xhttp);

xhttp.open('GET','https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp');
xhttp.send();
console.log(xhttp);













/**
 * Helper Code
 * $plugin_slug = 'ultraaddons-elementor-lite'; //woo-product-table
        $stats_url = 'https://api.wordpress.org/stats/plugin/1.0/?slug=' . $plugin_slug;
        $info_url = 'http://api.wordpress.org/plugins/info/1.0/' . $plugin_slug . '.json';
        $download_url = 'https://api.wordpress.org/stats/plugin/1.0/downloads.php?slug=' . $plugin_slug;
 */