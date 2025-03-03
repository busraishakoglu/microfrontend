# Kurulum Dosyaları
1.container Projesi için:
     npm install
2.cart Projesi için:
     npm install
3.product-list Projesi için:
     npm install

# Başlatma 
1.container Projesi için terminal:
     npm start
2.cart Projesi için terminal:
     npm start
3.product-list Projesi için terminal:
     npm start

# Geliştirme Özeti
Redux kullandım. Global State yönetimi ile hem bağımsız hem de merkezi yönetim ile state yönetimi sağlamak için kullandım. Container projesinde iki microfrontendi birleştirip redux sayesinde merkezi bir gloabal state oluşturdum. Böylece product-list ve cart mikrofrontendlerinin aynı veriyi görmesi ve güncellemesini sağladım. ProductList bileşeninde bir ürün sepete eklendiğinde, bu değişiklik Cart bileşeninde de eş zamanlı görünür hale geldi bu sayede.

product-list microforntendinde daha temiz yapı için bileşenleri iki ye ayırdım. Container bileşen olarak “ProductList”, presentational bileşen olarak “ProductItem” kullandım. Bileşenin daha modüler olması için customHook kullandım.

Performans olarak gereksiz render ı önlemek için React.memo ve useCallback, useSelector ile shallowEqual kullandım.

## Kullanılan Özellikler
1.Redux ile global state management
2.useCallback
3.toastrNotification - bilgi mesajı için
4.React.memo 
5.shallowEqual 

---------------------------------------------------------

# Installation Files

## For the container project:
npm install

## For the cart project
npm install

## For the product-list project
npm install

# Starting 

## For the container project in the terminal
npm start

## For the cart  project in the terminal
npm start

## For the product-list project in the terminal
npm start

# Development Summary

I used Redux for global state management to handle both independent and centralized state management. In the container project, I merged two microfrontends and created a centralized global state with Redux. This allowed the product-list and cart microfrontends to see and update the same data. For example, when a product is added to the cart in the ProductList component, the change is reflected simultaneously in the Cart component as well.

For a cleaner structure in the product-list microfrontend, I split the components into two: the "ProductList" as the container component and "ProductItem" as the presentational component. To make the component more modular, I used custom hooks.

For performance optimization and to prevent unnecessary renders, I used React.memo, useCallback, and shallowEqual with useSelector.

## Features Used

1. Redux for global state management
2. useCallback
3. toastrNotification for information messages
4. React.memo
5. shallowEqual