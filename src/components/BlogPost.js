import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";


// we create a prop called articleText that we assign a value of "Dear Reader: 
// Bjarne Stroustrup has the perfect lecture oration." This value is accessible from 
// within the BlogContent component as props.articleText!



function BlogPost() {
  return (
    <div id="blog-post">
      {/* BlogContent is being returned from BlogPost */}
      {/* Therefore, BlogContent is a child of BlogPost */}
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
