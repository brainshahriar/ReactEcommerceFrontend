class AppURL {

    static BaseURL="http://localhost:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostContact = this.BaseURL+"/postcontact"
    static AllSiteInfo = this.BaseURL+"/allsiteinfo"
    static AllCategoryDetails = this.BaseURL+"/allcategory"
    static ProductListByRemark(Remark){
        return this.BaseURL+"/productlistbyremark/"+Remark;
    }
     static ProductListByCategory(category){
         return this.BaseURL+"/productlistbycategory/"+category;
     }
     static ProductListBySubCategory(category,subcategory){
         return this.BaseURL+"/productlistbysubcategory/"+category+"/"+subcategory;
     }
     static AllSlider = this.BaseURL+"/allslider"

     static ProductDetails(code){
        return this.BaseURL+"/productdetails/"+code;
    }
    static NotificationHistory = this.BaseURL+"/notification"
    static ProductBySearch(searchkey){
        return this.BaseURL+"/search/"+searchkey;
   }
   static UserLogin = this.BaseURL+"/login"
   static UserData = this.BaseURL+"/user"
   static UserRegister = this.BaseURL+"/register"


}

export default AppURL
