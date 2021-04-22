---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Search
---

<link rel="stylesheet" href="{{ base.url | prepend: site.url }}/assets/index.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script src="{{ base.url | prepend: site.url }}/assets/index.js"></script>
<form method="GET" action="">
    <p><label>VIN: <input name="vin" id="vin" width="40" /></label>
        <button>Search</button>
    </p>
</form>
<div id="results"></div>