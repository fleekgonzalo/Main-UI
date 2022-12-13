/** @type {import('next').NextConfig} */
images.unoptimized = true
module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }     
 };
