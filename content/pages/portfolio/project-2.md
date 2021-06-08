---
title: Invoice
subtitle: Invoice web app by Stripe payment
date: '2019-04-30'
thumb_image: /images/Screenshot_5.png
thumb_image_alt: invoice
image: /images/friendly-giraffe.png
image_alt: invoice dashboard
seo:
  title: Project Title 2
  description: This is the project 2 description
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Project Title 2
      keyName: property
    - name: 'og:description'
      value: This is the project 2 description
      keyName: property
    - name: 'og:image'
      value: images/2.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Project Title 2
    - name: 'twitter:description'
      value: This is the project 2 description
    - name: 'twitter:image'
      value: images/2.jpg
      relativeUrl: true
layout: project
---
##### It is based on MERN stack.&#xD;&#xA;It uses react smarthr admin template as frontend template.&#xD;&#xA;It uses stripe card and stripe bank transfer as a payment gateway.&#xD;&#xA;&#xD;

##### It uses react-stripe-elements module.&#xD;&#xA;There are many reference data for stripe card payment.&#xD;&#xA;But the data for stripe bank transfer is lack. So It took some time to implement it.&#xD;

##### The steps for stripe bank transfer are followings:

*   create account token (routing number, account number, name, ...)

<!---->

*   create customer

<!---->

*   verify payment

<!---->

*   charge

##### Also, it uses Oauth.
