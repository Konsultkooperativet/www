---
layout: single
permalink: /konsultuppdrag/
title: "Senaste postade Konsultuppdragen i Göteborg"
author_profile: true
---
Ibland får vi förfrågningar på konsultuppdrag med it-konsulter eller managementkonsulter som vi inte själva kan besätta - då lägger vi ut dem här för eventuella frilansande konsulter som är intresserade av att konsulta genom [Konsultkooperativet](https://konsult.coop).

För att ta uppdrag genom kooperativet krävs att man som frilansande konsult är medlem i kooperativet - vi kan dock mot avgift också förmedla kandidater som ej är medlemmar. [Kontakta oss](https://konsult.coop/contact) för att inleda en diskussion.

Är du intresserad av något av uppdragen, skicka oss ett [mail](mailto:ansok@konsult.coop) med en länk till din linkedIn-profil, samt en kort presentation/cv. Vi hör av oss så snart som möjligt.

## Konsultuppdrag i Göteborg

{% include group-by-array collection=site.posts field="categories" %}

<ul>
  {% for post in site.categories.konsultuppdrag %}
    {% if post.url %}
        <li><a href="/blog/{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
