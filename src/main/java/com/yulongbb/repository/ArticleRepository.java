package com.yulongbb.repository;

import com.yulongbb.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jeremy on 2019/5/31.
 */
public interface ArticleRepository  extends JpaRepository<Article, Integer> {
}
