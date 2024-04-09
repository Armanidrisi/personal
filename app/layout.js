import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Arman Idrisi",
  description: "I Am A Coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
<meta name="google-site-verification" content="HMgX-ATjh_v5C3Hgwq4Mn2zFncMh_qqeB8ZRXeOuTu0" />

<!-- Start of Woopra Code -->
<script>
  !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");

  woopra.config({
    domain: "arman-idrisi.netlify.app",
    outgoing_tracking: true,
    download_tracking: true,
    click_tracking: true
  });
  
  woopra.track();
</script>
<!-- End of Woopra Code -->
</head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
