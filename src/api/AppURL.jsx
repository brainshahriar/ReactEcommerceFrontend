class AppURL {

    static BaseURL="http://localhost:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostContact = this.BaseURL+"/postcontact"
    static AllSiteInfo = this.BaseURL+"/allsiteinfo"
    static AllCategoryDetails = this.BaseURL+"/allcategory"
    static ProductListByRemark(Remark){
        return this.BaseURL+"/productlistbyremark/"+Remark;
    }
    // static ProuctListByCategory(category){
    //     return this.BaseURL+"/productlistbycategory/"+category;
    // }
    // static ProuctListBySubcategory(category,subcategory){
    //     return this.BaseURL+"/productlistbysubcategory/"+category+"/"+subcategory;
    // }

    

}

export default AppURL
