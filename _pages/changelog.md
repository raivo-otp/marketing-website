---
layout: text
title: Changelog
include_in_header: true
---

# Changelog

{{ site.data.changelog[0].name }} contains the latest features, bug fixes and improvements. Further down the page, you can wander endlessly through the history of Raivo. Will you scroll all the way down to its birth?

<br>

{% for release in site.data.changelog %}

## **{{ release.name }}**

{{ release.body }}

<br>

{% endfor %}

