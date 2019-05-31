package com.yulongbb.service;

import com.yulongbb.model.Article;
import com.yulongbb.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Jeremy on 2019/5/31.
 */
@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public List<Article> articles() {
        return this.articleRepository.findAll();
    }
}
