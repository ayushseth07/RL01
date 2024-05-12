
module.exports = {
    
    SearchResult : async (college, batch, sem) => {
        
        try {
            
        } catch (error) {
            global.log("error", error.message);
            return { success : false, message : `${error.message}` };
        }
    }
};
