---
layout: single
title:  "Snabb och gratis hemsidelösning för företag och bloggar"
date:   2018-04-15 13:00:00 +0100
categories: konsultbolag nyhet
author: mb
excerpt: "Enkel och smidig hemsideslösning för företag, otroligt snabb, och utan löpande månadskostnad"
header:
  teaser: "assets/images/2018-04-15.png"
---
Är det möjligt att få en professionell hosting av sitt företags hemsida utan att betala några avgifter? Ja det går faktiskt, och det finns ett antal alternativ - här presenterar vi den vä vi på Konsultkooperativet har valt.

## Statisk hemsida
Ett första krav är att hemsidan man skapar är statisk. Det betyder att alla sidor är genererade i förväg, och därmed väldigt enkla och snabba för en webbserver att leverera. Det gör det även möjligt att cachea alla filer, vilket ytterligare snabbar upp leveransen.

Vilka begränsningar ger då detta - inte så många faktiskt. De allra flesta hemsidor behöver inte vara dynamiska. De är oftast det för att man använder ett CMS (Content Management System) som genererar sidor dynamiskt. Om man istället går över till ett CMS som genererar sidorna statiskt, och att man redigerar och skriver nytt material offline, och laddar upp ändringar, så har man en statisk sida.

## Jekyll och Markdown
Den motor i använder för den här bloggen heter [Jekyll](https://jekyllrb.com/) och är väldigt enkel och funktionsrik. Man skapar enkelt nya sidor i så kallad Markdown, se exempel nedan:

    #Rubrik
    ## Underrubrik
    * punktad lista

    [Länk till Konsultkooperativet](http://konsult.coop)

>#Rubrik
## Underrubrik
* punktad lista

>[Länk till Konsultkooperativet](http://konsult.coop)

Se mer om Markdown [här](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Github
Vi har valt att lagra vår hemsida hos [Github](https://github.com), där får vi versionshantering och lagring av all källkod - samt en mycket bra integration till Netlify:

## Netlify
[Netlify](http://www.netlify.com) är vår hosting leverantör - de har ett nätverk av servrar över hela världen där kopior av år hemsida ligger, för att göra leveransen så snabb som möjligt till användaren. Detta kallas för Content Delivery Network, eller CDN.

Netlify är helt gratis att använda, och publicerar automatiskt alla uppdateringar vi gör i Github. Vi kan även publicera brancher på olika underdomäner för att se en förhandsvisning av ändringarna. Vi är mycket nöjda med enkelheten och de funktioner som Netlify erbjuder, som till exempel SSL-certifikat från [LetsEncrypt](https://letsencrypt.org), formulär etc.

För att kontrollera hastigheten på sin hemsida kan man använda flera verktyg online, jämför gärna vår [https://konsult.coop](https://konsult.coop) med er egen,

* [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkonsult.coop&tab=mobile) 
