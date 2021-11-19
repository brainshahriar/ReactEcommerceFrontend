class AppURL {

    static BaseURL="http://localhost:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostContact = this.BaseURL+"/postcontact"
    static AllSiteInfo = this.BaseURL+"/allsiteinfo"
    static AllCategoryDetails = this.BaseURL+"/allcategory"
    static ProuctListByRemark(Remark){
        return this.BaseURL+"/productlistbyremark"+Remark;
    }
    // static AllCategoryDetails = this.BaseURL+"/allcategory"
    // static AllCategoryDetails = this.BaseURL+"/allcategory"

    

}

export default AppURL
