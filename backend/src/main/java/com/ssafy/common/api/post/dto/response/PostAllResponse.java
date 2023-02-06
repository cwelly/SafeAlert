package com.ssafy.common.api.post.dto.response;

import com.ssafy.common.api.post.domain.Post;
import com.ssafy.common.api.post.domain.PostStatus;
import lombok.Getter;


@Getter
public class PostAllResponse {
    private final Long id;
    private final String brCateName;
    private final Long brCateId;
    private final String title;
    private final Long price;
    private final Long sale_price;
    private final PostStatus status;
    private final Long sellerId;
    private final String sellerName;
//    private final List<PostImageDto> postImages;

    public PostAllResponse(Post post){
        id = post.getId();
        sellerId = post.getSeller().getId();
        sellerName = post.getSeller().getName();
        title = post.getTitle();
        brCateName = post.getBrandcategory().getName();
        brCateId= post.getBrandcategory().getId();
        price = post.getPrice();
        status = post.getStatus();
        sale_price = post.getSale_price();
//        postImages = post.getPostImages()
//                .stream().map(postImages -> new PostImageDto(postImages))
//                        .collect(Collectors.toList());
    }
}