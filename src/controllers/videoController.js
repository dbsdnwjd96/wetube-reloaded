export const trending = (req, res) => res.render("home", {pageTitle: "Home"}); 

export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});; 
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"});; 
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete video")
}; 

export const upload = (req, res) => res.send("Upload");

export const search = (req, res) => res.send("Search"); 

