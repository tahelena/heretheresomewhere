# Pages/Components
* Home
  * SlideShow  -->
* About

  * InfoPhoto -->
* Sets
  * InfoPhoto
  * SlideShow 
* places
    * ProductsMain
    * ProductsList
    * ProductsItem
    * SideBar
    * Popup info
    * popUp add to cart
* Portraits
    * ProductsMain
    * ProductsList
    * ProductsItem
    * SideBar
    * Popup info
    * popUp add to cart
* Cart
  * List
  * Item
  * Total
  * Navbar cart
* Checkout page
  * Shipping form
  * Order Summary
  * Checkout button 
* Navbar
* Login
  * Logout
  * Add products
  * add category

=====================================================================
#Server
* Schemas:
   * admin: {username: "String", password: "String"}
      * photos: {name: "String", url: "String", info: "String", categoryID: "String"}
      * categories: {name: "String"}
   * orders: {country: "String", postcode: "String", city: "String", state/province: "String", address: "String", complement: "String", name: "String", surname: "String", mobile: "String", email: "String"}

---/
axios => url = ` https://www.pida.io/data/${img_url}?format=json` ;

exif: [ {Make:""}, {Model:""}, {"ExposureTime":""}, {"FNumber":5.6},{"ISO":800}, {"LensModel":"XF16-55mmF2.8 R LM WR"},{"Keywords": [ "Angkor","Asia","Bakong","Cambodia","Features","Places","Siem Reap","buildings & Architecture","temple"]}]