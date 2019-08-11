const MilitaryForceApp = {
    
    //HTML objects
    htmlWrap: null,
    magicNumberParagraph: null,
    
    //default styles
    magicNumberParagraphStyle: { fontSize: "33vmax", color: "rgb(50, 100, 150)", fontFamily: "sans-serif", margin: 0, textAlign: "center" },
    
    magicNumber: 42,
    
    init(){
        
        const MFA = MilitaryForceApp;
        
        const setHTMLObjects = function(){
            FFF.htmlWrap = $("<div>");
            FFF.magicNumberParagraph = $("<p>");
        }();       
        
        const setAppGUI = function(){
            FFF.magicNumberParagraph.html(FFF.magicNumber);
            FFF.htmlWrap.html(FFF.magicNumberParagraph);
        }();
        
        const setAppStyle = function(){
            FFF.magicNumberParagraph
                .css(FFF.magicNumberParagraphStyle);
        }();
        
        return FFF.htmlWrap;
        
    } //end init
    
};