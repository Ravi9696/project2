package com.niit.Dao;

import java.util.List;

import com.niit.model.BlogPost;

public interface BlogPostDao{
	void saveBlogPost(BlogPost blogPost);

	List<BlogPost> getAllBlogs(int approved);
	public BlogPost getBlogPost(int id);
	public void updateBlogPost(BlogPost blogPost);
	List<BlogPost> getApprovalStatus(String username);
	
}
