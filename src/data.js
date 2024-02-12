// @collapse

module.exports = [
  {
    conditions: {
      titleElement: ["h1.product-meta__title"],
      galleryItems: [
        ".product-gallery .product-gallery__carousel-item.is-selected",
        ".product-gallery .product-gallery__carousel-item",
      ],
      priceElements: [
        ".product-form__info-list .price-list .price.price--highlight",
        ".product-form__info-list .price-list .price",
      ],
      addButton: [".product-form__add-button"],
    },
    data: {
      productTitle: `jQuery("h1.product-meta__title").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          ".product-gallery .product-gallery__carousel-item.is-selected img[data-zoom]"
        ).attr("data-zoom") ||
        jQuery(
          jQuery(
            ".product-gallery .product-gallery__carousel-item.is-selected noscript"
          )?.text()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
    `,
      itemImages: `
      if (jQuery(".product-gallery .product-gallery__carousel-item").length > 0) {
        $arr = [];
        jQuery(".product-gallery .product-gallery__carousel-item").each(function (
          index
        ) {
          $img =
            jQuery(this).find("img[data-zoom]").attr("data-zoom") ||
            jQuery(jQuery(this).find("noscript").text()).filter("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-form__info-list .price-list .price.price--highlight")
          .text()
          .trim() ||
        jQuery(".product-form__info-list .price-list .price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-form__info-list .price-list .price.price--compare")
          .text()
          .trim() ||
        jQuery(".product-form__info-list .price-list .price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      stockStatus: `jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-form__add-button").is(":disabled");`,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title"],
      galleryItems: [
        ".product .images .is-selected",
        ".product .images [data-src]",
      ],
      priceElements: ["#price_ppr ins", "#price_ppr .money", "#price_ppr"],
    },
    data: {
      productTitle: `jQuery("h1.product_title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(".product .images .is-selected").attr("data-src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
      `,
      itemImages: `
      if (jQuery(".product .images [data-src]").length > 0) {
        $arr = [];
        jQuery(".product .images [data-src]").each(function (index) {
          $img = jQuery(this).attr("data-src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      `,
      productPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery("#price_ppr ins").text().trim() ||
        jQuery("#price_ppr .money").text().trim() ||
        jQuery("#price_ppr").text().trim();
  
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      productOriginalPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery("#price_ppr del:visible").text().trim() ||
        jQuery("#price_ppr .money").text().trim() ||
        jQuery("#price_ppr").text().trim();
  
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      stockStatus: `
      jQuery(".error-404.not-found:visible").length > 0 ||
        jQuery("#out_stock_ppr").is(":visible");
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title"],
      galleryItems: [
        '.product-gallery .product-gallery--image[data-gallery-selected="true"] noscript',
        '.product-gallery .product-gallery--image[data-gallery-selected="true"][data-zoom]',
        ".product-gallery .product-gallery--image.is-selected img[src]",
        ".product-gallery .product-gallery--image",
      ],
      priceElements: [
        ".product-pricing .product--price [data-price]:visible .money",
        ".product-pricing .product--price [data-price-compare-at]:visible .money",
      ],
      addButton: [
        "[data-product-atc-text]",
        "button.product-form--atc-button .atc-button--text",
        ".product-pricing .product__badge--soldout:visible",
      ],
    },
    data: {
      productTitle: `jQuery("h1.product-title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          jQuery(
            '.product-gallery .product-gallery--image[data-gallery-selected="true"] noscript'
          )
            ?.text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("loading-src") ||
        jQuery(
          '.product-gallery .product-gallery--image[data-gallery-selected="true"][data-zoom]'
        ).attr("data-zoom") ||
        jQuery(
          jQuery(
            '.product-gallery .product-gallery--image[data-gallery-selected="true"] noscript'
          )
            ?.text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".product-gallery .product-gallery--image.is-selected img[src]").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-gallery .product-gallery--image").length > 0) {
        $arr = [];
        jQuery(".product-gallery .product-gallery--image").each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript")?.text()?.trim())
              ?.filter("img")
              ?.attr("loading-src") ||
            jQuery(this).attr("data-zoom") ||
            jQuery(jQuery(this).find("noscript")?.text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr = jQuery(".product-pricing .product--price [data-price]:visible .money").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr = jQuery(".product-pricing .product--price [data-price-compare-at]:visible .money").text().trim() || 
            jQuery(".product-pricing .product--price [data-price]:visible .money").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery(".product-pricing .product__badge--soldout:visible").length > 0 ||
      jQuery("button.product-form--atc-button").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title"],
      galleryItems: [
        '.product-gallery .product-gallery--image[data-gallery-selected="true"] noscript',
        '.product-gallery .product-gallery--image[data-gallery-selected="true"][data-zoom]',
        ".product-gallery .product-gallery--image.is-selected img[src]",
        ".product-gallery .product-gallery--image",
      ],
      priceElements: [
        ".product-pricing .price__current:visible .money",
        ".product-pricing .price__compare-at:visible .money",
      ],
      addButton: [
        "[data-product-atc-text]",
        "button.product-form--atc-button .atc-button--text",
        ".product-pricing .product__badge--soldout:visible",
      ],
    },
    data: {
      productTitle: `jQuery("h1.product-title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          jQuery(
            '.product-gallery .product-gallery--image[data-gallery-selected="true"] noscript'
          )
            ?.text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("loading-src") ||
        jQuery(
          '.product-gallery .product-gallery--image[data-gallery-selected="true"][data-zoom]'
        ).attr("data-zoom") ||
        jQuery(
          jQuery(
            '.product-gallery .product-gallery--image[data-gallery-selected="true"] noscript'
          )
            ?.text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".product-gallery .product-gallery--image.is-selected img[src]").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-gallery .product-gallery--image").length > 0) {
        $arr = [];
        jQuery(".product-gallery .product-gallery--image").each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript")?.text()?.trim())
              ?.filter("img")
              ?.attr("loading-src") ||
            jQuery(this).attr("data-zoom") ||
            jQuery(jQuery(this).find("noscript")?.text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr = jQuery(".product-pricing .price__current:visible .money").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery(".product-pricing .price__compare-at:visible .money").text().trim() ||
        jQuery(".product-pricing .price__current:visible .money").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery(".product-pricing .product__badge--soldout:visible").length > 0 ||
      jQuery("button.product-form--atc-button").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title:first"],
      galleryItems: [
        ".product__main-photos .product-main-slide.is-selected img[data-photoswipe-src]",
        ".product__main-photos .product-main-slide",
      ],
      priceElements: [
        ".product-section .product__price:first .visually-hidden",
      ],
      addButton: ["button[data-add-to-cart]", 'button[id*="AddToCart"]'],
    },
    data: {
      productTitle: `jQuery("h1.product-single__title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          ".product__main-photos .product-main-slide.is-selected img[data-photoswipe-src]"
        ).attr("data-photoswipe-src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product__main-photos .product-main-slide").length > 0) {
        $arr = [];
        jQuery(".product__main-photos .product-main-slide").each(function (index) {
          $img =
            jQuery(this)
              .find("img[data-photoswipe-src]")
              .attr("data-photoswipe-src") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img:first").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency") || window?.Shopify?.currency?.active;
      $pr =
        jQuery('.product-section .product__price:first[class*="sale"] .visually-hidden')
          .text()
          .trim() ||
        jQuery('.product-section .product__price:first[class*="sale"]').text().trim() ||
        jQuery(".product-section .product__price:not(.product__price--compare):first .visually-hidden")
          .text()
          .trim() ||
        jQuery(".product-section .product__price:not(.product__price--compare):first").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency") || window?.Shopify?.currency?.active;
      $pr =
        jQuery(".product-section .product__price.product__price--compare:first .visually-hidden")
          .text()
          .trim() ||
        jQuery(".product-section .product__price.product__price--compare:first").text().trim() ||
        jQuery(".product-section .product__price:not(.product__price--compare):first .visually-hidden")
          .text()
          .trim() ||
        jQuery(".product-section .product__price:not(.product__price--compare):first").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery("button[data-add-to-cart]").is(":disabled") ||
      jQuery('button[id*="AddToCart"]').is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title:first"],
      galleryItems: [
        ".product__main-photos .product-main-slide.is-selected img[data-photoswipe-src]",
        ".product__main-photos .product-main-slide",
      ],
      priceElements: [
        ".product-section .product__price:first:not(:has(.visually-hidden))",
      ],
      addButton: ["button[data-add-to-cart]", 'button[id*="AddToCart"]'],
    },
    data: {
      productTitle: `jQuery("h1.product-single__title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          ".product__main-photos .product-main-slide.is-selected img[data-photoswipe-src]"
        ).attr("data-photoswipe-src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product__main-photos .product-main-slide").length > 0) {
        $arr = [];
        jQuery(".product__main-photos .product-main-slide").each(function (index) {
          $img =
            jQuery(this)
              .find("img[data-photoswipe-src]")
              .attr("data-photoswipe-src") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img:first").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery("meta[data-currency]").attr("data-currency") ||
        window?.Shopify?.currency?.active;
      $pr =
        jQuery(".product-section .product__price.on-sale:first").text().trim() ||
        jQuery(".product-section .product__price.sale-price:first").text().trim() ||
        jQuery(".product-section .product__price:not(.product__price--compare):first")
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery("meta[data-currency]").attr("data-currency") ||
        window?.Shopify?.currency?.active;
      $pr =
        jQuery(".product-section .product__price.product__price--compare:first")
          .text()
          .trim() ||
        jQuery(".product-section .product__price:not(.product__price--compare):first")
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery("button[data-add-to-cart]").is(":disabled") ||
      jQuery("button[data-add-to-cart]").is(":disabled") ||
      jQuery('button[id*="AddToCart"]').is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.page-title"],
      galleryItems: [
        ".fotorama__stage__frame.fotorama__active .fotorama__img",
        ".product.media img.gallery-placeholder__image",
        ".product.media .gallery-placeholder__image",
      ],
      priceElements: [
        '.product-info-price span[data-price-type="finalPrice"]:first:visible',
        '.product-info-price span[data-price-type="oldPrice"]:first:visible',
      ],
      addButton: [".product-info-stock-sku", ".product-info-main .stock"],
    },
    data: {
      productTitle: `jQuery("h1.page-title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(".fotorama__stage__frame.fotorama__active .fotorama__img").attr(
          "src"
        ) ||
        jQuery(".fotorama__stage__frame.fotorama__fade-rear img.fotorama__img").attr(
          "src"
        ) ||
        jQuery(".product.media img.gallery-placeholder__image").attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      
      if ($img) {
        $img = $img.split("?")[0];
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
      }
          `,
      itemImages: `
      if (
        jQuery(".fotorama__stage__shaft .fotorama__stage__frame:has(img)").length > 0
      ) {
        $arr = [];
        jQuery(".fotorama__stage__shaft .fotorama__stage__frame:has(img)").each(function (
          index
        ) {
          $img =
            jQuery(this).attr("href")?.trim() ||
            jQuery(this).find("img").attr("src")?.trim();
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (
        jQuery(".fotorama__nav__shaft .fotorama__nav__frame img.fotorama__img")
          .length > 0
      ) {
        $arr = [];
        jQuery(".fotorama__nav__shaft .fotorama__nav__frame img.fotorama__img").each(
          function (index) {
            $img = jQuery(this).attr("src")?.trim();
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      } else if (jQuery(".product.media .gallery-placeholder__image").length > 0) {
        $arr = [];
        jQuery(".product.media .gallery-placeholder__image").each(function (index) {
          $img = jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr = jQuery(
        '.product-info-price span[data-price-type="finalPrice"]:first:visible'
      )
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery('.product-info-price span[data-price-type="oldPrice"]:first:visible')
          .text()
          .trim() ||
        jQuery('.product-info-price span[data-price-type="finalPrice"]:first:visible')
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible, .cms-no-route.cms-noroute-index:visible").length >
      0 || jQuery(".product-info-stock-sku .stock").hasClass("unavailable") || jQuery(".product-info-main .stock").hasClass("unavailable");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title", ".summary .product_title"],
      galleryItems: [
        ".woocommerce-product-gallery__wrapper .flex-active-slide img[data-large_image]",
        ".woocommerce-product-gallery__wrapper .flex-active-slide img",
      ],
      priceElements: [
        ".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi",
        ".summary .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .price .woocommerce-Price-amount.amount:first bdi",
      ],
      addButton: [".summary .stock", ".summary .single_add_to_cart_button"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_title:first").text().trim() || jQuery(".summary .product_title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".woocommerce-product-gallery__wrapper .flex-active-slide img[data-large_image]"
        ).attr("data-large_image") ||
        jQuery(".woocommerce-product-gallery__wrapper .flex-active-slide img").attr(
          "data-src"
        ) ||
        jQuery(".woocommerce-product-gallery__wrapper .flex-active-slide img").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image"
        ).each(function (index) {
          $img =
            jQuery(this).find('img[data-src!=""]').attr("data-src") ||
            jQuery(this).find('img[src!=""]').attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
        jQuery(".summary .stock").hasClass("out-of-stock");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title:first", ".product__title h1"],
      galleryItems: [
        ".product .product__media-item.is-active img",
        ".product .product__media-item",
      ],
      priceElements: [
        ".product__info-wrapper .price:first .price__sale:visible .price-item.price-item--sale",
        ".product__info-wrapper .price:first .price__regular:visible .price-item.price-item--regular",
      ],
      addButton: [".product-form .product-form__submit"],
    },
    data: {
      productTitle: `
      jQuery(".product__title h1:first").text().trim() || jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product .product__media-item.is-active img").attr("src") ||
        jQuery(".product .product__media-item.is-active img").attr("data-srcset") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product .product__media-item").length > 0) {
        $arr = [];
        jQuery(".product .product__media-item").each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("div")
              ?.find("img")
              ?.attr("src") || jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(
          ".product__info-wrapper .price:first .price__sale:visible .price-item.price-item--sale"
        )
          .text()
          .trim() ||
        jQuery(
          ".product__info-wrapper .price:first .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(
          ".product__info-wrapper .price:first .price__sale:visible .price-item.price-item--regular"
        )
          .text()
          .trim() ||
        jQuery(
          ".product__info-wrapper .price:first .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        (jQuery(".product-form .product-form__submit").is(":disabled") &&
          jQuery("#product-grid").length == 0);
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.productView-title:first"],
      galleryItems: [
        ".productView .productView-image[data-zoom-image]:first",
        ".productView .productView-image .productView-img-container img",
        ".productView .slick-active a[data-image-gallery-zoom-image-url]",
        ".productView .productView-thumbnail a",
        ".productView .productView-imageCarousel-main .slick-active img",
      ],
      priceElements: [
        ".productView .productView-price [data-product-price-without-tax]:visible",
      ],
      addButton: ["#form-action-addToCart"],
    },
    data: {
      productTitle: `
      jQuery("h1.productView-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".productView .productView-image[data-zoom-image]:first").attr(
          "data-zoom-image"
        ) ||
        jQuery(".productView .productView-image .productView-img-container img").attr(
          "src"
        ) ||
        jQuery(
          ".productView .slick-active a[data-image-gallery-zoom-image-url]"
        ).attr("data-image-gallery-zoom-image-url") ||
        jQuery(
          ".productView .productView-imageCarousel-main .slick-active a[data-zoom-image]"
        ).attr("data-zoom-image") ||
        jQuery(
          ".productView .productView-imageCarousel-main .slick-active img[data-lazy]"
        ).attr("data-lazy") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".productView .productView-thumbnail a").length > 0) {
        $arr = [];
        jQuery(".productView .productView-thumbnail a").each(function (index) {
          $img =
            jQuery(this).attr("data-image-gallery-zoom-image-url") ||
            jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (jQuery(".productView .productView-imageCarousel-main .slick-slide").length > 0) {
        $arr = [];
        jQuery(".productView .productView-imageCarousel-main .slick-slide").each(function (index) {
          $img =
            jQuery(this).find('a[data-zoom-image]').attr("data-zoom-image") ||
            jQuery(this).find('[data-image-gallery-zoom-image-url]').attr("data-image-gallery-zoom-image-url") ||
            jQuery(this).find('img[data-lazy]').attr("data-lazy") ||
            jQuery(this).find('img[src]').attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[itemprop="priceCurrency"]').attr("content");
      
      $pr =
        jQuery(
          ".productView .productView-price [data-product-price-without-tax]:visible"
        )
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-non-sale-price-without-tax]:visible"
        )
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery(
          ".productView .productView-price [data-product-rrp-price-without-tax]:visible"
        )
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-non-sale-price-without-tax]:visible"
        )
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-price-without-tax]:visible"
        )
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery("body.404:visible").length > 0 ||
        jQuery("#form-action-addToCart").is(":disabled") ||
        jQuery('.productView meta[itemprop="availability"][content*="Out"]').length >
          0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-name"],
      galleryItems: [".product-detail .main-image img[src]"],
      itemImagesItems: [".product-detail .primary-images .thumbnails li"],
      priceElements: [".product-detail .prices:visible .sales .value:first"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-name").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-detail .main-image img[src]").attr("src") ||
        jQuery('meta[property="og:image"]:first').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-detail .primary-images .thumbnails li").length > 0) {
        $arr = [];
        jQuery(".product-detail .primary-images .thumbnails li").each(function (
          index
        ) {
          $img = jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      
          `,
      productPrice: `
      $pr = jQuery(".product-detail .prices:visible .sales .value:first")
        .text()
        .trim();

      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }

      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-detail .prices:visible .strike-through:visible .value:first")
          .text()
          .trim() ||
        jQuery(".product-detail .prices:visible .original-price:visible .value:first")
          .text()
          .trim() ||
        jQuery(".product-detail .prices:visible .sales .value:first").text().trim();

      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }

      $pr;
          `,
      stockStatus: `
      jQuery(
          ".product-detail .product-availability .availability-msg .not-available:visible"
        ).length > 0 || jQuery(".template-404:visible").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-info__title"],
      galleryItems: [
        "product-gallery media-carousel .product-gallery__media.is-selected img",
        "product-gallery media-carousel .product-gallery__media:first img",
        "product-gallery media-carousel .product-gallery__media",
      ],
      priceElements: [
        ".product-info__price .price-list sale-price .money:first",
        ".product-info__price .price-list sale-price",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product-info__title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          "product-gallery media-carousel .product-gallery__media.is-selected img"
        ).attr("src") ||
        jQuery(
          "product-gallery media-carousel .product-gallery__media:first img"
        ).attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery("product-gallery media-carousel .product-gallery__media").length > 0
      ) {
        $arr = [];
        jQuery("product-gallery media-carousel .product-gallery__media").each(
          function (index) {
            $img = jQuery(this).find("img").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-info__price .price-list sale-price .money:first")
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info__price .price-list sale-price")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(
          ".product-info__price .price-list compare-at-price:visible .money:first"
        )
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info__price .price-list compare-at-price:visible")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info__price .price-list sale-price .money:first")
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info__price .price-list sale-price")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".not-found:visible").length > 0 ||
        jQuery(".product-info__badge-list sold-out-badge:visible").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-area__details__title"],
      galleryItems: [
        ".product-slider .swiper-slide.current-img noscript",
        ".product-slider:first .swiper-slide",
      ],
      priceElements: [
        ".product-area__details .current-price",
        ".product-area__details .was-price:visible",
      ],
      addButton: [
        '.product-area__details .product-detail__form__action button[type="submit"]',
        "#AddToCart-product-template",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product-area__details__title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".product-slider .swiper-slide.current-img noscript").text()?.trim()
        )
          ?.filter("img")
          ?.attr("data-src") || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.split("?")[0];
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
      }
          `,
      itemImages: `
      if (jQuery(".product-slider:first .swiper-slide").length > 0) {
        $arr = [];
        jQuery(".product-slider:first .swiper-slide").each(function (index) {
          $img = jQuery(jQuery(this).find("noscript").text())
            .filter("img")
            .attr("data-src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery(".product-area__details .current-price")
        .text()
        .replace(/[\\s]/g, "")
        .trim();

      $cr = jQuery('meta[property="og:price:currency"]').attr("content");

      $pr = $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-area__details .was-price:visible")
          .text()
          .replace(/[\\s]/g, "")
          .trim() ||
        jQuery(".product-area__details .current-price")
          .text()
          .replace(/[\\s]/g, "")
          .trim();

      $cr = jQuery('meta[property="og:price:currency"]').attr("content");

      $pr = $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery("#page-404-not-found:visible").length > 0 ||
        jQuery(
          '.product-area__details .product-detail__form__action button[type="submit"]'
        )
          .text()
          .toLowerCase()
          .indexOf("out") != -1 ||
        jQuery("#AddToCart-product-template").text().toLowerCase().indexOf("out") !=
          -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title"],
      galleryItems: [
        ".product-image-container .carousel-cell.is-selected img[data-zoom-src]",
        ".product-image-container .carousel-cell.is-selected noscript",
        ".product-image-container .carousel-cell.is-selected img[src]",
        ".product-image-container .image-slide.carousel-cell",
      ],
      priceElements: [
        "#product-price .price__sale:visible .price-item.price-item--sale",
        "#product-price .price__regular:visible .price-item.price-item--regular",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product-title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-image-container .carousel-cell.is-selected img[data-zoom-src]"
        ).attr("data-zoom-src") ||
        jQuery(
          jQuery(".product-image-container .carousel-cell.is-selected noscript")
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".product-image-container .carousel-cell.is-selected img[src]").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");

      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-image-container .image-slide.carousel-cell").length > 0) {
        $arr = [];
        jQuery(".product-image-container .image-slide.carousel-cell").each(function (
          index
        ) {
          $img =
            jQuery(this).find("img").attr("data-zoom-src") ||
            jQuery(jQuery(this).find("noscript").text()).filter("img").attr("src");
          $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
          $img = $img.split("?")[0];
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery("#product-price .price__sale:visible .price-item.price-item--sale")
          .text()
          .trim() ||
        jQuery(
          "#product-price .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();

      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery("meta[data-currency]").attr("data-currency");

      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery("#product-price .price__sale:visible .price-item.price-item--regular")
          .text()
          .trim() ||
        jQuery(
          "#product-price .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();

      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery("meta[data-currency]").attr("data-currency");

      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("#addToCart[value*=Out]:visible").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title"],
      galleryItems: [
        ".product-single__media-wrapper:not(.hide) noscript",
        ".product-single__media-wrapper:not(.hide) .product-single__media[data-zoom]",
        ".product-single__media-wrapper:not(.hide) .product-single__media img[src]",
        ".product-single__media-wrapper:not(.hide) .product-single__media img[data-srcset]",
        ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)",
      ],
      priceElements: ["#ProductPrice .money", "#ProductPrice"],
      addButton: [
        ".product-single__meta button[data-add-to-cart]",
        ".product-single__meta button#AddToCart",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".product-single__media-wrapper:not(.hide) noscript").text()?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          ".product-single__media-wrapper:not(.hide) .product-single__media[data-zoom]"
        ).attr("data-zoom") ||
        jQuery(
          ".product-single__media-wrapper:not(.hide) .product-single__media img[src]"
        ).attr("src") ||
        jQuery(
          ".product-single__media-wrapper:not(.hide) .product-single__media img[data-srcset]"
        )
          .attr("data-srcset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)"
        ).each(function (index) {
          $img =
            jQuery(jQuery(this).parent().find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).attr("data-zoom") ||
            jQuery(this).find("img").attr("src") ||
            jQuery(this)
              .find("img[data-srcset]")
              .attr("data-srcset")
              ?.split(",")
              ?.pop()
              ?.trim()
              ?.split(" ")?.[0];
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      
          `,
      productPrice: `
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        window?.Shopify?.currency?.active;
      $pr =
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        window?.Shopify?.currency?.active;
      $pr =
        jQuery("#ComparePrice:visible .money").text().trim() ||
        jQuery("#ComparePrice:visible").text().trim() ||
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;

          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-single__meta button[data-add-to-cart]").is(":disabled") ||
        jQuery(".product-single__meta button#AddToCart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title"],
      galleryItems: [
        ".product-single__media-wrapper:not(.hide) noscript",
        ".product-single__media-wrapper:not(.hide) .product-single__media[data-zoom]",
        ".product-single__media-wrapper:not(.hide) .product-single__media img[src]",
        ".product-single__media-wrapper:not(.hide) .product-single__media img[data-srcset]",
        ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)",
      ],
      priceElements: [
        ".product-single__meta .price__sale:visible .price-item.price-item--sale",
        ".product-single__meta .price__regular:visible .price-item.price-item--regular",
      ],
      addButton: [".product-single__meta button[data-add-to-cart]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".product-single__media-wrapper:not(.hide) noscript").text()?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          ".product-single__media-wrapper:not(.hide) .product-single__media[data-zoom]"
        ).attr("data-zoom") ||
        jQuery(
          ".product-single__media-wrapper:not(.hide) .product-single__media img[src]"
        ).attr("src") ||
        jQuery(
          ".product-single__media-wrapper:not(.hide) .product-single__media img[data-srcset]"
        )
          .attr("data-srcset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)"
        ).each(function (index) {
          $img =
            jQuery(jQuery(this).parent().find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).attr("data-zoom") ||
            jQuery(this).find("img").attr("src") ||
            jQuery(this)
              .find("img[data-srcset]")
              .attr("data-srcset")
              ?.split(",")
              ?.pop()
              ?.trim()
              ?.split(" ")?.[0];
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      
          `,
      productPrice: `
      $pr =
        jQuery(
          ".product-single__meta .price__sale:visible .price-item.price-item--sale"
        )
          .text()
          .trim() ||
        jQuery(
          ".product-single__meta .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();

      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");

      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(
          ".product-single__meta .price__sale:visible .price-item.price-item--regular"
        )
          .text()
          .trim() ||
        jQuery(
          ".product-single__meta .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();

      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");

      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-single__meta button[data-add-to-cart]").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.title"],
      galleryItems: [
        ".product-detail .main-image .slick-slide.slick-active noscript",
        ".product-detail .main-image .slick-slide.slick-active img[src]",
        ".product-detail .main-image .slick-slide.slick-active img[data-srcset]",
        ".product-detail .main-image .slick-slide:not(.slick-cloned)",
        ".product-detail .main-image .slide",
      ],
      priceElements: [
        ".product-detail .current-price:visible .money",
        ".product-detail .current-price:visible",
      ],
      addButton: ['.quantity-submit-row__submit .button[type="submit"]'],
    },
    data: {
      productTitle: `
      jQuery("h1.title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".product-detail .main-image .slick-slide.slick-active noscript")
            .text()
            ?.trim()
        )
          ?.filter("img")
          .attr("src") ||
        jQuery(".product-detail .main-image .slick-slide.slick-active img[src]").attr(
          "src"
        ) ||
        jQuery(
          ".product-detail .main-image .slick-slide.slick-active img[data-srcset]"
        )
          .attr("data-srcset")
          ?.split(", ")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
          jQuery(".product-detail .main-image .slide:first img[data-srcset]").attr("data-srcset")
          ?.split(", ")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
        jQuery(".product-detail .main-image .slide:first img[src]").attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".product-detail .main-image .slick-slide:not(.slick-cloned):not(:has(video))"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-detail .main-image .slick-slide:not(.slick-cloned):not(:has(video))"
        ).each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              .attr("src") ||
            jQuery(this)
              .find("img[data-srcset]")
              .attr("data-srcset")
              ?.split(", ")
              ?.pop()
              ?.trim()
              ?.split(" ")?.[0] ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (
        jQuery(
          ".product-detail .main-image .slide:not(:has(video))"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-detail .main-image .slide:not(:has(video))"
        ).each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              .attr("src") ||
            jQuery(this)
              .find("img[data-srcset]")
              .attr("data-srcset")
              ?.split(", ")
              ?.pop()
              ?.trim()
              ?.split(" ")?.[0] ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery('[property="og:price:currency"]').attr("content") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-detail .current-price:visible .money").text().trim() ||
        jQuery(".product-detail .current-price:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery('[property="og:price:currency"]').attr("content") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-detail .was-price:visible .money").text().trim() ||
        jQuery(".product-detail .was-price:visible").text().trim() ||
        jQuery(".product-detail .current-price:visible .money").text().trim() ||
        jQuery(".product-detail .current-price:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery('.quantity-submit-row__submit .button[type="submit"]').is(
          ":disabled"
        );
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title"],
      galleryItems: [
        ".productImgSlider .product-image.is-selected noscript",
        ".productImgSlider .product-image.is-selected .product-single__media[data-bgset]",
        ".productImgSlider .product-image.is-selected .product-single__media img[src]",
        ".productImgSlider .product-image .product-single__media",
      ],
      priceElements: [
        ".product-info__wrapper .product-price [data-product-price]",
      ],
      addButton: [".product-info__wrapper button[data-add-to-cart]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".productImgSlider .product-image.is-selected noscript")
            .text()
            ?.trim()
        )
          ?.filter("div")
          ?.css("background-image")
          ?.replace("url(", "")
          ?.replace(")", "")
          ?.replace(/\\"/gi, "") ||
        jQuery(
          ".productImgSlider .product-image.is-selected .product-single__media[data-bgset]"
        )
          .attr("data-bgset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
        jQuery(
          ".productImgSlider .product-image.is-selected .product-single__media img[src]"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".productImgSlider .product-image .product-single__media").length > 0
      ) {
        $arr = [];
        jQuery(".productImgSlider .product-image .product-single__media").each(
          function (index) {
            $img =
              jQuery(jQuery(this).parent().find("noscript").text()?.trim())
                ?.filter("div")
                ?.css("background-image")
                ?.replace("url(", "")
                ?.replace(")", "")
                ?.replace(/\\"/gi, "") ||
              jQuery(this)
                .find("[data-bgset]")
                .attr("data-bgset")
                ?.split(",")
                ?.pop()
                ?.trim()
                ?.split(" ")?.[0] ||
              jQuery(this).find("img").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
      
          `,
      productPrice: `
      $cr =
        jQuery("#currency-list:first .disclosure-list__item--current a").attr(
          "data-value"
        ) || window?.Shopify?.currency?.active;
      $pr = jQuery(".product-info__wrapper .product-price [data-product-price]")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
    
          `,
      productOriginalPrice: `
      $cr =
        jQuery("#currency-list:first .disclosure-list__item--current a").attr(
          "data-value"
        ) || window?.Shopify?.currency?.active;
      $pr =
        jQuery(".product-info__wrapper .product-price [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product-info__wrapper .product-price [data-product-price]")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-info__wrapper button[data-add-to-cart]").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.ProductMeta__Title"],
      galleryItems: [
        ".Product__Gallery .Product__SlideItem--image.is-selected noscript",
        ".Product__Gallery .Product__SlideshowNavImage.is-selected img",
        "#pwzrswiper-wrapper .pwzrswiper-slide-active img",
        ".product-gallery-slider .slick-slide.slick-active img",
      ],
      priceElements: [
        ".Product__Info .ProductMeta__Price.Price.Price--highlight:visible",
        ".Product__Info .ProductMeta__Price.Price",
        ".ProductMeta .money:first",
      ],
      addButton: [".ProductForm .ProductForm__AddToCart"],
    },
    data: {
      productTitle: `
      jQuery("h1.ProductMeta__Title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".Product__Gallery .Product__SlideItem--image.is-selected noscript")
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".Product__Gallery .Product__SlideItem--image.is-selected img").attr(
          "src"
        ) ||
        jQuery("#pwzrswiper-wrapper .pwzrswiper-slide-active img").attr(
          "data-zoom"
        ) ||
        jQuery("#pwzrswiper-wrapper .pwzrswiper-slide-active img").attr("src") ||
        jQuery(".product-gallery-slider .slick-slide.slick-active img").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".Product__Gallery:visible .Product__SlideItem--image")
          .length > 0
      ) {
        $arr = [];
        jQuery(".Product__Gallery .Product__SlideItem--image").each(
          function (index) {
            $img = jQuery(jQuery(this).find('noscript').text()?.trim())?.filter("img")?.attr("src") || jQuery(this).find('img').attr('src');
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      } else if (jQuery("#pwzrswiper-wrapper .pwzrswiper-slide").length > 0) {
        $arr = [];
        jQuery("#pwzrswiper-wrapper .pwzrswiper-slide img").each(function (index) {
          $img = jQuery(this).attr("data-zoom") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (jQuery(".product-gallery-slider .slick-slide").length > 0) {
        $arr = [];
        jQuery(".product-gallery-slider .slick-slide").each(function (index) {
          $img =
            jQuery(this).find("img").attr("data-src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(".Product__Info .ProductMeta__Price.Price.Price--highlight:visible")
          .text()
          .trim() ||
        jQuery(".Product__Info .ProductMeta__Price.Price").text().trim() ||
        jQuery(".ProductMeta .money:first").text().trim();
      
      $cr = jQuery('meta[data-currency]').attr("data-currency") || 
        jQuery('meta[property="product:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".Product__Info .ProductMeta__Price.Price.Price--compareAt:visible")
          .text()
          .trim() ||
        jQuery(".Product__Info .ProductMeta__Price.Price").text().trim() ||
        jQuery(".ProductMeta .money:first").text().trim();
      
      $cr = jQuery('meta[data-currency]').attr("data-currency") || 
        jQuery('meta[property="product:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".ProductForm .ProductForm__AddToCart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title"],
      galleryItems: [
        ".product__media .product__media-item.slick-active img[src]",
        '.product__media .product__media-item:has([data-media-type="image"])',
      ],
      priceElements: [".product-single__meta .product__price [data-price]"],
      addButton: [".product-single__meta [data-add-to-cart]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product__media .product__media-item.slick-active img[src]").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery('.product__media .product__media-item:has([data-media-type="image"])')
          .length > 0
      ) {
        $arr = [];
        jQuery(
          '.product__media .product__media-item:has([data-media-type="image"])'
        ).each(function (index) {
          $img = jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      
          `,
      productPrice: `
      $pr = jQuery(".product-single__meta .product__price [data-price]")
      .text()
      .trim();
      
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-single__meta .product__price [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product-single__meta .product__price [data-price]").text().trim();
      
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
       jQuery(".product-single__meta [data-add-to-cart]").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title", 'h1[itemprop="name"]'],
      galleryItems: [
        ".product-single__photos .product-single__image-wrapper:not(.hide) img",
        ".product-single__photos .product-single__image-wrapper",
      ],
      priceElements: ["#ProductPrice .money", "#ProductPrice"],
      addButton: ["#AddToCartText"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title:first").text().trim() ||
        jQuery('h1[itemprop="name"]').text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-single__photos .product-single__image-wrapper:not(.hide) img"
        )
          .attr("data-srcset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-single__photos .product-single__image-wrapper").length > 0
      ) {
        $arr = [];
        jQuery(".product-single__photos .product-single__image-wrapper").each(
          function (index) {
            $img =
              jQuery(this)
                .find("img:first")
                .attr("data-srcset")
                ?.split(",")
                ?.pop()
                ?.trim()
                ?.split(" ")?.[0] || jQuery(this).find("img:first").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
      
          `,
      productPrice: `
      $cr = jQuery('meta[data-currency]').attr('data-currency') || 
        jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[data-currency]').attr('data-currency') || 
        jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ComparePrice .money").text().trim() ||
        jQuery("#ComparePrice").text().trim() ||
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("#AddToCartText").text().trim().toLowerCase().indexOf("out") >= 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-name .h1"],
      galleryItems: [
        ".product-gallery-container .product-image-gallery .gallery-image.visible",
        ".product-gallery-container .product-image-gallery .gallery-image:first",
      ],
      priceElements: [
        ".product-shop .price-info-container .special-price .price",
      ],
      addButton: [
        ".product-essential .add-to-cart-wrapper .availability",
        ".product-essential .add-to-cart-buttons button.btn-cart",
      ],
    },
    data: {
      productTitle: `
      jQuery(".product-name .h1").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image.visible"
        ).attr("data-zoom-image") ||
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image.visible"
        ).attr("src") ||
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image:first"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-gallery-container .product-image-gallery .gallery-image")
          .length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image"
        ).each(function (index) {
          $img = jQuery(this).attr("data-zoom-image") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = "";

      try {
        $cr = JSON.parse(
          jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
            .text()
            .trim()
        ).offers[0].priceCurrency;
      } catch (e) {}
      
      $pr = jQuery(".product-shop .price-info-container .special-price .price")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = "";

      try {
        $cr = JSON.parse(
          jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
            .text()
            .trim()
        ).offers[0].priceCurrency;
      } catch (e) {}
      
      $pr =
        jQuery(".product-shop .price-info-container .old-price .price:visible")
          .text()
          .trim() ||
        jQuery(".product-shop .price-info-container .special-price .price")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      stockStatus: `
      jQuery(".cms-index-noroute.cms-not-found:visible").length > 0 ||
        jQuery(".product-essential .add-to-cart-wrapper .availability").hasClass(
          "out-of-stock"
        ) ||
        jQuery(".product-essential .add-to-cart-buttons button.btn-cart").is(
          ":disabled"
        );
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_name"],
      galleryItems: [
        ".product .gallery-cell.is-selected img[data-src]",
        ".product .product_gallery .gallery-cell",
      ],
      priceElements: [".product_section .current_price:visible"],
      addButton: [
        ".product_form .purchase-details__buttons",
        ".product_section .add_to_cart",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product_name").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product .gallery-cell.is-selected img[data-src]").attr("data-src") ||
        jQuery(".product .gallery-cell.is-selected img.zoomImg").attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product .product_gallery .gallery-cell").length > 0) {
        $arr = [];
        jQuery(".product .product_gallery .gallery-cell").each(function (index) {
          $img =
            jQuery(this).find("img[data-src]").attr("data-src") ||
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      
          `,
      productPrice: `
      $cr =
        jQuery(".product_section .current_price .money").attr("data-currency") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr = jQuery(".product_section .current_price:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery(".product_section .current_price .money").attr("data-currency") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product_section .was_price:visible").text().trim() ||
        jQuery(".product_section .current_price:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".error-404:visible").length > 0 ||
        jQuery(".product_form .purchase-details__buttons").hasClass(
          "product-is-unavailable"
        ) ||
        jQuery(".product_section .add_to_cart").hasClass("disabled") ||
        jQuery(".product_section .add_to_cart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title", ".summary .product_title"],
      galleryItems: [
        ".product-image-slider .owl-item.active img",
        ".product-image-slider .owl-item:not(.cloned) img",
      ],
      priceElements: [
        ".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi",
        ".summary .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .price .woocommerce-Price-amount.amount:first bdi",
      ],
      addButton: [".summary .stock", ".summary .product-stock"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_title:first").text().trim() || jQuery(".summary .product_title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-image-slider .owl-item.active img").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-image-slider .owl-item:not(.cloned) img").length > 0) {
        $arr = [];
        jQuery(".product-image-slider .owl-item:not(.cloned) img").each(function (
          index
        ) {
          $img = jQuery(this).attr("data-src") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
        jQuery(".summary .stock").hasClass("out-of-stock") || 
        jQuery(".summary .product-stock").hasClass("out-of-stock");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_name"],
      galleryItems: [
        ".product_gallery .flex-active-slide img[data-src]",
        ".product_gallery .flex-active-slide img[src]",
        ".product_gallery .slides li",
      ],
      priceElements: [".product_section .current_price:visible"],
      addButton: [
        ".product_form .purchase-details__buttons",
        ".product_section .add_to_cart",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product_name").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product_gallery .flex-active-slide img[data-src]").attr(
          "data-src"
        ) ||
        jQuery(".product_gallery .flex-active-slide img[src]").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product_gallery .slides li").length > 0) {
        $arr = [];
        jQuery(".product_gallery .slides li").each(function (index) {
          $img =
            jQuery(this).find("img[data-src]").attr("data-src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery(".product_section .current_price:first .money").attr(
          "data-currency"
        ) || jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product_section .current_price:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery(".product_section .current_price .money").attr("data-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product_section .was_price:first:visible").text().trim() ||
        jQuery(".product_section .current_price:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".error-404:visible").length > 0 ||
        jQuery(".product_form .purchase-details__buttons").hasClass(
          "product-is-unavailable"
        ) ||
        jQuery(".product_section .add_to_cart").hasClass("disabled") ||
        jQuery(".product_section .add_to_cart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-page--heading"],
      galleryItems: [
        '.product-media--container .product-media--root[data-active="true"] .image--root img[data-src]:first',
        '.product-media--container .product-media--root[data-active="true"] .image--root img[src]:first',
        ".product-media--container .product-media--root .image--root",
      ],
      priceElements: [
        ".product-page--info .product-price--wrapper .product-price--original:visible:first",
      ],
      addButton: [
        ".product-page--info .product-buy-buttons--root button.product-buy-buttons--cta",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product-page--heading:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          '.product-media--container .product-media--root[data-active="true"] .image--root img[data-src]:first'
        ).attr("data-src") ||
        jQuery(
          '.product-media--container .product-media--root[data-active="true"] .image--root img[src]:first'
        ).attr("src") ||
        jQuery(
          ".product-media--container .product-media--root .image--root img[src]:first"
        ).attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-media--container .product-media--root .image--root").length >
        0
      ) {
        $arr = [];
        jQuery(".product-media--container .product-media--root .image--root").each(
          function (index) {
            $img =
              jQuery(this).find("img[data-src]:first").attr("data-src") ||
              jQuery(this).find("img[src]:first").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery(
        ".product-page--info .product-price--wrapper .product-price--original:visible:first"
      )
        .text()
        .trim();
      
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      productOriginalPrice: `
      $pr =
        jQuery(
          ".product-page--info .product-price--wrapper .product-price--compare:visible:first"
        )
          .text()
          .trim() ||
        jQuery(
          ".product-page--info .product-price--wrapper .product-price--original:visible:first"
        )
          .text()
          .trim();
      
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(
          ".product-page--info .product-buy-buttons--root button.product-buy-buttons--cta"
        ).is(":disabled");
    
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-details-product-title"],
      galleryItems: [
        ".product-medias__main .product-medias__primary img.zoomImg",
        ".product-medias__main .swiper-slide.swiper-slide-active img",
        ".product-medias__main .swiper-slide",
      ],
      priceElements: ["#ProductPrice .money", "#ProductPrice"],
      addButton: ["#AddToCart"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-details-product-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-medias__main .product-medias__primary img.zoomImg").attr(
          "src"
        ) ||
        jQuery(
          ".product-medias__main .swiper-slide.swiper-slide-active img.zoomImg"
        ).attr("src") ||
        jQuery(".product-medias__main .swiper-slide:first img.zoomImg").attr("src") ||
        jQuery(".product-medias__main .swiper-slide:first img").attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-medias__main .swiper-slide").length > 0) {
        $arr = [];
        jQuery(".product-medias__main .swiper-slide").each(function (index) {
          $img =
            jQuery(this).find("img.zoomImg[src]").attr("src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").attr("content");
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery("#ComparePrice:visible .money").text().trim() ||
        jQuery("#ComparePrice:visible").attr("content") ||
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").attr("content");
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery("#AddToCart").is(":disabled") ||
      jQuery('.product-details-wrapper [itemprop="availability"][href*="Out"]')
        .length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ['h1[class*="product__title"]'],
      galleryItems: [
        "[data-product-single-media-group] [data-main-media] [data-main-slide].is-selected [data-master]",
        "[data-product-single-media-group] [data-main-media] [data-main-slide].is-selected img[src]",
        '[class*="product__media-wrapper"] .swiper .swiper-slide.swiper-slide-active img[src]',
        "[data-product-single-media-group] [data-main-media] [data-main-slide]",
        '[class*="product__media-wrapper"] .swiper .swiper-slide:not([class*="duplicate"])',
      ],
      priceElements: [
        '[class*="product__info-container"] [class*="product-price"][data-product-price] ins',
        '[class*="product__info-container"] [class*="product-price"][data-product-price]',
      ],
    },
    data: {
      productTitle: `
      jQuery('h1[class*="product__title"]').text().trim();

          `,
      mainImage: `
      $img =
        jQuery(
          "[data-product-single-media-group] [data-main-media] [data-main-slide].is-selected [data-master]"
        ).attr("data-master") ||
        jQuery(
          "[data-product-single-media-group] [data-main-media] [data-main-slide].is-selected img[src]"
        ).attr("src") ||
        jQuery(
          '[class*="product__media-wrapper"] .swiper .swiper-slide.swiper-slide-active img[src]'
        ).attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          "[data-product-single-media-group] [data-main-media] [data-main-slide]"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          "[data-product-single-media-group] [data-main-media] [data-main-slide]"
        ).each(function (index) {
          $img =
            jQuery(this).find("[data-master]").attr("data-master") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (
        jQuery(
          '[class*="product__media-wrapper"] .swiper .swiper-slide:not([class*="duplicate"])'
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          '[class*="product__media-wrapper"] .swiper .swiper-slide:not([class*="duplicate"])'
        ).each(function (index) {
          $img =
            jQuery(this).find("[data-master]").attr("data-master") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery(
          '[class*="product__info-container"] [class*="product-price"][data-product-price] ins'
        )
          .text()
          .trim() ||
        jQuery(
          '[class*="product__info-container"] [class*="product-price"][data-product-price]'
        )
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery(
          '[class*="product__info-container"] [class*="product-price"][data-product-price] del:visible'
        )
          .text()
          .trim() ||
        jQuery(
          '[class*="product__info-container"] [class*="product-price"][data-product-price]'
        )
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery(
        '[class*="product__info-container"] [data-product-available] [data-soldout-status]:visible'
      ).length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title:first"],
      galleryItems: [
        ".product__main-photos .slick-slide.slick-active img[data-photoswipe-src]",
        ".product__main-photos .slick-slide.slick-active img:last",
      ],
      priceElements: [
        ".product-section .product__price.on-sale:first",
        ".product-section .product__price:first",
      ],
      addButton: ['[id*="AddToCartText"]', 'button[id*="AddToCart"]'],
    },
    data: {
      productTitle: `jQuery("h1.product-single__title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          ".product__main-photos .slick-slide.slick-active img[data-photoswipe-src]"
        ).attr("data-photoswipe-src") ||
        jQuery(".product__main-photos .slick-slide.slick-active img:last").attr(
          "data-srcset"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product__main-photos .slick-slide:not(.slick-cloned)").length > 0
      ) {
        $arr = [];
        jQuery(".product__main-photos .slick-slide:not(.slick-cloned)").each(
          function (index) {
            $img =
              jQuery(this)
                .find("img[data-photoswipe-src]")
                ?.attr("data-photoswipe-src") ||
              jQuery(jQuery(this).find("noscript").text())
                .filter("img")
                .attr("src") ||
              jQuery(this).find("[data-zoom-size]").attr("data-zoom-size");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(".product-section .product__price.on-sale:first").text().trim() ||
        jQuery(".product-section .product__price:first").text().trim();
      $cr =
        jQuery("meta[data-currency]").attr("data-currency") ||
        window?.Shopify?.currency?.active;
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-section .product__price.product__price--compare:first")
          .text()
          .trim() || jQuery(".product-section .product__price:first").text().trim();
      $cr =
        jQuery("meta[data-currency]").attr("data-currency") ||
        window?.Shopify?.currency?.active;
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
      jQuery('[id*="AddToCartText"]').text().trim().toLowerCase().indexOf("out") !=
        -1 ||
      jQuery('[id*="AddToCartText"]').parent().is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-name h1:first"],
      galleryItems: [
        ".product-img-box .prod_img_tab.current:visible img[src]",
        ".prod_img_thumbs li.isImage a",
      ],
      priceElements: [
        ".product-shop .product-prices .special-price .price:first",
        ".product-shop .product-prices .regular-price .price:first",
      ],
      addButton: [".product-shop .add-to-cart-buttons .btn-cart"],
    },
    data: {
      productTitle: `jQuery(".product-name h1:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(".product-img-box .prod_img_tab.current:visible img[src]").attr(
          "src"
        ) || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".prod_img_thumbs li.isImage a").length > 0) {
        $arr = [];
        jQuery(".prod_img_thumbs li.isImage a").each(function (index) {
          $img =
            jQuery(this).attr("data-standard") ||
            jQuery(this).attr("href") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
      
          `,
      productPrice: `
      $cr = "";

      try {
        $cr = JSON.parse(
          jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
            .text()
            .trim()
        ).offers.priceCurrency;
      } catch (e) {}
      
      $pr =
        jQuery(".product-shop .product-prices .special-price .price:first")
          .text()
          .trim() ||
        jQuery(".product-shop .product-prices .regular-price .price:first")
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = "";

      try {
        $cr = JSON.parse(
          jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
            .text()
            .trim()
        ).offers.priceCurrency;
      } catch (e) {}
      
      $pr =
        jQuery(".product-shop .product-prices .old-price:visible .price:first")
          .text()
          .trim() ||
        jQuery(".product-shop .product-prices .regular-price .price:first")
          .text()
          .trim() ||
        jQuery(".product-shop .product-prices .special-price:visible .price:first")
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
      jQuery(".product-shop .add-to-cart-buttons .btn-cart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.productName_title"],
      galleryItems: [
        ".athenaProductImageCarousel_imageSlider .athenaProductImageCarousel_image",
        ".productImageCarousel_imagesContainer .productImageCarousel_image:first",
        ".athenaProductImageCarousel_imageSlider .athenaProductImageCarousel_imageWrapper",
      ],
      priceElements: [".productPrice_priceInfo .productPrice_price:first"],
      addButton: ["button.productAddToBasket"],
    },
    data: {
      productTitle: `jQuery("h1.productName_title").text().trim() ||
      jQuery('h1[data-product-name="title"]').text().trim() ||
      jQuery("h3.productName_title:first").text().trim();`,
      mainImage: `
      let currIndex = jQuery(".athenaProductImageCarousel_imageSlider")
        ?.attr("style")
        ?.split("left")?.[1]
        ?.replace(/[-+%;:]+/g, "")
        ?.match("[0-9]")?.["0"];
      
      $img = currIndex?.length
        ? jQuery(
            ".athenaProductImageCarousel_imageSlider .athenaProductImageCarousel_image"
          )
            .eq(currIndex)
            .attr("src")
        : "" || currIndex?.length
        ? jQuery(
            ".athenaProductImageCarousel_imageSlider .athenaProductImageCarousel_image"
          )
            .eq(currIndex)
            .attr("srcset")
            ?.split(",")
            ?.pop()
            ?.trim()
            ?.split(" ")?.[0]
        : "" ||
          jQuery(
            ".productImageCarousel_imagesContainer .productImageCarousel_image:first"
          ).attr("src") ||
          jQuery('[property="og:image"]').attr("content");
      
      if ($img) {
        $img = $img.split("?")[0];
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".athenaProductImageCarousel_imageSlider .athenaProductImageCarousel_imageWrapper"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".athenaProductImageCarousel_imageSlider .athenaProductImageCarousel_imageWrapper"
        ).each(function (index) {
          $img =
            jQuery(this).find("img.athenaProductImageCarousel_image").attr("src") ||
            jQuery(this)
              .find("img.athenaProductImageCarousel_imagePreview")
              .attr("src") ||
            jQuery(this)
              .find("img[srcset]")
              .attr("srcset")
              ?.split(",")
              ?.pop()
              ?.trim()
              ?.split(" ")?.[0];
          if ($img) {
            $img = $img.split("?")[0];
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery("[data-currency]").attr("data-currency");

      $pr =
        jQuery(".productPrice_priceInfo .productPrice_price:first").text().trim() ||
        jQuery(".productPrice_priceInfo .productPrice_rrp:first").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery("[data-currency]").attr("data-currency");

      $pr =
        jQuery(".productPrice_priceInfo .productPrice_rrp:visible:first")
          .text()
          .trim() ||
        jQuery(".productPrice_priceInfo .productPrice_price:first").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".pageUnavailable:visible").length > 0 ||
      jQuery("button.productAddToBasket").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-meta__title"],
      galleryItems: [
        ".product .product__media-item.is-selected img",
        '.product .product__media-item:not([data-media-type*="video"])',
      ],
      priceElements: [
        ".product-meta__price-list-container .price-list .price.price--highlight",
        ".product-meta__price-list-container .price-list .price",
      ],
      addButton: [".product-form__add-button"],
    },
    data: {
      productTitle: `jQuery("h1.product-meta__title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery(".product .product__media-item.is-selected img").attr("src") ||
        jQuery(".product .product__media-item.is-selected img").attr("data-srcset") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
    `,
      itemImages: `
      if (
        jQuery('.product .product__media-item:not([data-media-type*="video"])')
          .length > 0
      ) {
        $arr = [];
        jQuery('.product .product__media-item:not([data-media-type*="video"])').each(
          function (index) {
            $img =
              jQuery(this).find("img[src]").attr("src") ||
              jQuery(this).find("img[data-srcset]").attr("data-srcset");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
      `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(
          ".product-meta__price-list-container .price-list .price.price--highlight"
        )
          .text()
          .trim() ||
        jQuery(".product-meta__price-list-container .price-list .price")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(
          ".product-meta__price-list-container .price-list .price.price--compare"
        )
          .text()
          .trim() ||
        jQuery(".product-meta__price-list-container .price-list .price")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      stockStatus: `jQuery(".shopify-section--404:visible, template-404:visible").length > 0 ||
      jQuery(".product-form__add-button").is(":disabled");`,
    },
  },
  {
    conditions: {
      titleElement: ["h1.ProductItem-details-title:visible"],
      galleryItems: [
        ".ProductItem-gallery-slides .ProductItem-gallery-slides-item.sqs-active-slide img",
        ".ProductItem-gallery-slides .ProductItem-gallery-slides-item.selected img",
        ".ProductItem-gallery-slides .ProductItem-gallery-slides-item",
      ],
      priceElements: [
        ".product-price span:contains(Sale) + span",
        ".product-price span:first",
        ".product-price:first",
      ],
    },
    data: {
      productTitle: `jQuery("h1.ProductItem-details-title:visible").text().trim();`,
      mainImage: `
      $img =
        jQuery(
          ".ProductItem-gallery-slides .ProductItem-gallery-slides-item.sqs-active-slide img"
        ).attr("data-src") ||
        jQuery(
          ".ProductItem-gallery-slides .ProductItem-gallery-slides-item.selected img"
        ).attr("data-src") ||
        jQuery(
          ".ProductItem-gallery-slides .ProductItem-gallery-slides-item.sqs-active-slide img"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
    `,
      itemImages: `
      if (
        jQuery(".ProductItem-gallery-slides .ProductItem-gallery-slides-item")
          .length > 0
      ) {
        $arr = [];
        jQuery(".ProductItem-gallery-slides .ProductItem-gallery-slides-item").each(
          function (index) {
            $img =
              jQuery(this).find("img[data-src]:first").attr("data-src") ||
              jQuery(this).find("img[src]:first").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
      `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-price span:contains(Sale) + span")
          .text()
          .replace(/[\\s]/g, "")
          .trim() ||
        jQuery(".product-price span:first").text().replace(/[\\s]/g, "").trim() ||
        jQuery(".product-price:first")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          .replace(/[\\s]/g, "")
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-price .original-price span:first")
          .text()
          .replace(/[\\s]/g, "")
          .trim() ||
        jQuery(".product-price span:first").text().replace(/[\\s]/g, "").trim() ||
        jQuery(".product-price:first")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          .replace(/[\\s]/g, "")
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      `,
      stockStatus: `jQuery("body#not-found").length > 0 ||
      jQuery(".ProductItem-details .variant-out-of-stock").length > 0;`,
    },
  },
  {
    conditions: {
      titleElement: ["h1.productView-title:first"],
      galleryItems: [
        ".productView .productView-image.slick-active .productView-img-container [data-src]",
        ".productView .productView-image.slick-active .productView-img-container img",
        ".productView .productView-image[data-zoom-image]",
        ".productView .productView-image .productView-img-container img",
      ],
      itemImagesItems: [".productView .productView-thumbnail a"],
      priceElements: [
        ".productView .productView-price [data-product-price-with-tax]:visible",
      ],
      addButton: [".productView-details #form-action-addToCart"],
    },
    data: {
      productTitle: `
      jQuery("h1.productView-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".productView .productView-image.slick-active .productView-img-container [data-src]"
        ).attr("data-src") ||
        jQuery(
          ".productView .productView-image.slick-active .productView-img-container img"
        ).attr("src") ||
        jQuery(".productView .productView-image[data-zoom-image]").attr(
          "data-zoom-image"
        ) ||
        jQuery(".productView .productView-image .productView-img-container img").attr(
          "src"
        ) ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".productView .productView-thumbnail a").length > 0) {
        $arr = [];
        jQuery(".productView .productView-thumbnail a").each(function (index) {
          $img =
            jQuery(this).attr("data-image-gallery-zoom-image-url") ||
            jQuery(this).attr("data-image-gallery-new-image-url") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[itemprop="priceCurrency"]').attr("content");
      
      $pr = jQuery(
        ".productView .productView-price [data-product-price-with-tax]:visible"
      )
        .text()
        .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery(".productView .productView-price [data-product-rrp-with-tax]:visible")
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-non-sale-price-with-tax]:visible"
        )
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-price-with-tax]:visible"
        )
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery("body.404:visible").length > 0 || jQuery('h1:contains("404 Error - Page not found"):visible').length > 0 || jQuery(".productView-details #form-action-addToCart").is(":disabled") || jQuery('.productView meta[itemprop="availability"][content*="Out"]').length > 0;
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_name:visible"],
      galleryItems: [
        ".product-gallery__main .product-gallery__image.is-selected img[data-zoom-src]",
        ".product-gallery__main .product-gallery__image.is-selected img[src]",
        ".product-gallery__main .product-gallery__image",
      ],
      priceElements: [".product_section .current_price:visible"],
      addButton: [".product_section .add_to_cart"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_name:visible").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-gallery__main .product-gallery__image.is-selected img[data-zoom-src]"
        ).attr("data-zoom-src") ||
        jQuery(
          ".product-gallery__main .product-gallery__image.is-selected img[src]"
        ).attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }

          `,
      itemImages: `
      if (jQuery(".product-gallery__main .product-gallery__image").length > 0) {
        $arr = [];
        jQuery(".product-gallery__main .product-gallery__image").each(function (
          index
        ) {
          $img =
            jQuery(this).find("img").attr("data-zoom-src") ||
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery(".product_section .current_price .money:first").attr(
          "data-currency"
        ) || jQuery('meta[property="product:price:currency"]').attr("content");
      $pr = jQuery(".product_section .current_price:visible")
        .text()
        .replace(/[\\s]/g, "")
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;

          `,
      productOriginalPrice: `
      $cr =
        jQuery(".product_section .current_price .money").attr("data-currency") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product_section .was_price:visible")
          .text()
          .replace(/[\\s]/g, "")
          .trim() ||
        jQuery(".product_section .current_price:visible")
          .text()
          .replace(/[\\s]/g, "")
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product_section .add_to_cart").hasClass("disabled") ||
        jQuery(".product_section .add_to_cart").is(":disabled");
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title"],
      galleryItems: [
        ".woocommerce-product-gallery__wrapper .owl-item.active img[src]",
      ],
      priceElements: [
        ".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi",
        ".summary p.price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary p.price .woocommerce-Price-amount.amount:first bdi",
      ],
      addButton: [".summary"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".woocommerce-product-gallery__wrapper .owl-item.active img[src]").attr(
          "src"
        ) || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".woocommerce-product-gallery__wrapper .owl-item img").length > 0) {
        $arr = [];
        jQuery(".woocommerce-product-gallery__wrapper .owl-item img").each(function (
          index
        ) {
          $img = jQuery(this).attr("data-src") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }      
          `,
      productPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price del + .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary p.price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary p.price del + .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary p.price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary p.price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary p.price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
        jQuery(".summary .stock").hasClass("out-of-stock");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title"],
      galleryItems: [
        ".product__media__wrapper .product__media.is-selected img[src]",
        ".product__media__wrapper .product__media",
      ],
      priceElements: [".product__price__main [data-product-price]"],
      addButton: ["[data-add-to-cart-text]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product__media__wrapper .product__media.is-selected img[src]").attr(
          "src"
        ) ||
        jQuery(".product__media__wrapper .product__media.is-selected img").attr(
          "srcset"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product__media__wrapper .product__media").length > 0) {
        $arr = [];
        jQuery(".product__media__wrapper .product__media").each(function (index) {
          $img =
            jQuery(this).find("img").attr("src") ||
            jQuery(this).find("img").attr("srcset");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }    
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product__price__main [data-product-price]").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product__price__main [data-compare-price]").text().trim() ||
        jQuery(".product__price__main [data-product-price]").text().trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("[data-add-to-cart-text]")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-title h1"],
      galleryItems: [
        ".product-images .featured .product-image--cell.is-selected noscript",
        ".product-images .featured .product-image--cell",
      ],
      priceElements: [".single-product #ProductPrice-product-template:first"],
      addButton: [
        ".single-product #AddToCart-product-template [data-addtocarttext]",
      ],
    },
    data: {
      productTitle: `
      jQuery(".product-title h1").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(
            ".product-images .featured .product-image--cell.is-selected noscript"
          )
            ?.text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src")
          ?.trim() || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-images .featured .product-image--cell").length > 0) {
        $arr = [];
        jQuery(".product-images .featured .product-image--cell").each(function (
          index
        ) {
          $img = jQuery(jQuery(this).find("noscript").text()?.trim())
            ?.filter("img")
            .attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }   
          `,
      productPrice: `
      $cr = jQuery('[property="product:price:currency"]').attr("content")?.trim();
      $pr = jQuery(".single-product #ProductPrice-product-template:first")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('[property="product:price:currency"]').attr("content")?.trim();
      $pr =
        jQuery(".single-product #ComparePrice-product-template:visible .money")
          .text()
          .trim() || jQuery("#ProductPrice-product-template").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".single-product #AddToCart-product-template [data-addtocarttext]")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: ['h1[itemprop="name"]'],
      galleryItems: [
        "#ProductImage-product-template",
        "#ProductPhotoImg-product-template",
        "#ProductThumbs-product-template li",
        "#ProductThumbs-product-template .slick-slide",
      ],
      priceElements: ["#ProductPrice-product-template:visible"],
      addButton: ['link[itemprop="availability"]'],
    },
    data: {
      productTitle: `
      jQuery('h1[itemprop="name"]:first').text().trim();
          `,
      mainImage: `
      $img =
        jQuery("#ProductImage-product-template").attr("src") ||
        jQuery("#ProductPhotoImg-product-template").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery("#ProductThumbs-product-template li").length > 0) {
        $arr = [];
        jQuery("#ProductThumbs-product-template li").each(function (index) {
          $img =
            jQuery(this).find("a").attr("href");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }  else if (jQuery("#ProductThumbs-product-template .slick-slide").length > 0) {
        $arr = [];
        jQuery("#ProductThumbs-product-template .slick-slide").each(function (index) {
          $img =
            jQuery(this).find("[data-zoom]").attr("data-zoom") ||
            jQuery(this).find("[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } 
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery("#ProductPrice-product-template:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ComparePrice-product-template:visible").text().trim() ||
        jQuery("#ProductPrice-product-template:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery('link[itemprop="availability"]')
          .attr("href")
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-page-info__title h1"],
      galleryItems: [
        ".product-gallery__main .product-gallery__main_item.slick-active img",
        ".product-gallery__main .product-gallery__main_item",
      ],
      priceElements: [
        ".product-page-info__price .price.price--sale span:last",
        ".product-page-info__price .price span:last",
      ],
      addButton: [".product-page-info__button-add-to-cart button"],
    },
    data: {
      productTitle: `
      jQuery(".product-page-info__title h1").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-gallery__main .product-gallery__main_item.slick-active img")
          .attr("data-srcset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] || jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-gallery__main .product-gallery__main_item").length > 0) {
        $arr = [];
        jQuery(".product-gallery__main .product-gallery__main_item").each(function (
          index
        ) {
          $img = jQuery(this)
            .find("img[data-srcset]")
            .attr("data-srcset")
            ?.split(",")
            ?.pop()
            ?.trim()
            ?.split(" ")?.[0];
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        window?.Shopify?.currency?.active ||
        jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery(".product-page-info__price .price.price--sale span:last")
          .text()
          .trim() ||
        jQuery(".product-page-info__price .price span:last").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
    
          `,
      productOriginalPrice: `
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        window?.Shopify?.currency?.active ||
        jQuery("meta[data-currency]").attr("data-currency");
      $pr =
        jQuery(".product-page-info__price .price.price--sale span:first")
          .text()
          .trim() ||
        jQuery(".product-page-info__price .price span:last").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-page-info__button-add-to-cart button").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.productView-title"],
      galleryItems: [
        ".productView .productView-image.slick-active .productView-img-container [data-src]",
        ".productView .productView-image.slick-active .productView-img-container img",
        ".productView .productView-image .productView-img-container img",
        ".productView .productView-image img[data-main-image]",
        ".productView .productView-thumbnail a",
      ],
      priceElements: [
        ".productView-price .price__sale:visible .price-item.price-item--sale",
        ".productView-price .price__regular:visible .price-item.price-item--regular",
      ],
      addButton: [".product-form .product-form__submit"],
    },
    data: {
      productTitle: `
      jQuery("h1.productView-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".productView .productView-image.slick-active .productView-img-container [data-src]"
        ).attr("data-src") ||
        jQuery(
          ".productView .productView-image.slick-active .productView-img-container img"
        ).attr("src") ||
        jQuery(".productView .productView-image .productView-img-container img").attr(
          "src"
        ) ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".productView .productView-image img[data-main-image]").length > 0) {
        $arr = [];
        jQuery(".productView .productView-image img[data-main-image]").each(function (
          index
        ) {
          $img =
            jQuery(this).attr("data-image") ||
            jQuery(this).attr("data-srcset") ||
            jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (jQuery(".productView .productView-thumbnail a").length > 0) {
        $arr = [];
        jQuery(".productView .productView-thumbnail a").each(function (index) {
          $img =
            jQuery(this).attr("data-image") ||
            jQuery(this).attr("data-srcset") ||
            jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(".productView-price .price__sale:visible .price-item.price-item--sale")
          .text()
          .trim() ||
        jQuery(
          ".productView-price .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(
          ".productView-price .price__sale:visible .price-item.price-item--regular"
        )
          .text()
          .trim() ||
        jQuery(
          ".productView-price .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-form .product-form__submit").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title:first"],
      galleryItems: [
        ".product-photos .slick-slide.slick-active img",
        ".product-photos .product-photo-container .slick-slide:not(.slick-cloned)",
      ],
      priceElements: ['.product-shop .prices .price[itemprop="price"]:visible'],
      addButton: ["#product-add-to-cart"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-title:first").text().replace(/\\s+/g, " ")?.trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-photos .slick-slide.slick-active img").attr("src") ||
        jQuery('meta[property="og:image"]:first').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".product-photos .product-photo-container .slick-slide:not(.slick-cloned)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-photos .product-photo-container .slick-slide:not(.slick-cloned)"
        ).each(function (index) {
          $img = jQuery(this).find("img:first").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery('.product-shop .prices .price[itemprop="price"]:visible')
      .text()
      .trim();
    
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        jQuery("[data-currency]").attr("data-currency");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-shop .prices .compare-price:visible").text().trim() ||
        jQuery('.product-shop .prices .price[itemprop="price"]:visible')
          .text()
          .trim();
    
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        jQuery("[data-currency]").attr("data-currency");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("#product-add-to-cart[value*='Out']").length > 0 ||
        jQuery("#product-add-to-cart[value*='Unavailable']").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title"],
      galleryItems: [
        ".woocommerce-product-gallery__wrapper .is-selected img",
        ".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image .wp-post-image",
      ],
      priceElements: [
        ".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi",
        ".summary .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .price .woocommerce-Price-amount.amount:first bdi",
      ],
      addButton: [".summary .stock", ".summary .single_add_to_cart_button"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".woocommerce-product-gallery__wrapper .is-selected img").attr(
          "data-src"
        ) ||
        jQuery(
          ".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image .wp-post-image"
        ).attr("data-src") ||
        jQuery(
          ".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image img:first"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".woocommerce-product-gallery__wrapper [data-thumb] img[data-src]")
          .length > 0
      ) {
        $arr = [];
        jQuery(
          ".woocommerce-product-gallery__wrapper [data-thumb] img[data-src]"
        ).each(function (index) {
          $img = jQuery(this).attr("data-src") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }    
          `,
      productPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
        jQuery(".summary .stock").hasClass("out-of-stock");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title"],
      galleryItems: [
        ".woocommerce-product-gallery__image.slick-active img[src]",
      ],
      priceElements: [
        ".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi",
        ".summary p.price ins .woocommerce-Price-amount.amount:first bdi",
        ".summary p.price .woocommerce-Price-amount.amount:first bdi",
      ],
      addButton: [".summary"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".woocommerce-product-gallery__image.slick-active img[data-large_image]"
        ).attr("data-large_image") ||
        jQuery(".woocommerce-product-gallery__image.slick-active img").attr(
          "data-src"
        ) ||
        jQuery(".woocommerce-product-gallery__image.slick-active img").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".woocommerce-product-gallery__image ~ .slick-slide:not(.slick-cloned)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".woocommerce-product-gallery__image ~ .slick-slide:not(.slick-cloned)"
        ).each(function (index) {
          $img =
            jQuery(this).find('img[data-src!=""]').attr("data-src") ||
            jQuery(this).find('img[src!=""]').attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (
        jQuery(
          ".woocommerce-product-gallery__image.slick-slide:not(.slick-cloned)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".woocommerce-product-gallery__image.slick-slide:not(.slick-cloned)"
        ).each(function (index) {
          $img =
            jQuery(this).find('img[data-src!=""]').attr("data-src") ||
            jQuery(this).find('img[src!=""]').attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      }    
          `,
      productPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price del + .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary p.price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary p.price del + .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary p.price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".summary .woocommerce-variation-price:visible .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".summary p.price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".summary p.price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
        jQuery(".summary .stock").hasClass("out-of-stock");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title"],
      galleryItems: [
        ".product-single__photo-wrapper .product-single__photo:not(.hide)",
        ".product-single__photo-wrapper .product-single__photo:not(.hide) .product-featured-img",
      ],
      priceElements: [
        ".product-single__meta .price__sale:visible .price-item.price-item--sale",
        ".product-single__meta .price__regular:visible .price-item.price-item--regular",
      ],
      addButton: ["[data-add-to-cart-text]", "#AddToCartText-product-template"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-single__photo-wrapper .product-single__photo:not(.hide)"
        ).attr("data-zoom") ||
        jQuery(
          ".product-single__photo-wrapper .product-single__photo:not(.hide) .product-featured-img"
        )
          .attr("data-srcset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
        jQuery(
          ".product-single__photo-wrapper .product-single__photo:not(.hide) .product-featured-img"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".product-single__photos .product-single__photo:not(.product-single__media--video)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-single__photos .product-single__photo:not(.product-single__media--video)"
        ).each(function (index) {
          $img =
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }        
          `,
      productPrice: `
      $pr =
        jQuery(
          ".product-single__meta .price__sale:visible .price-item.price-item--sale"
        )
          .text()
          .trim() ||
        jQuery(
          ".product-single__meta .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale [data-currency]").attr("data-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(
          ".product-single__meta .price__sale:visible .price-item.price-item--regular"
        )
          .text()
          .trim() ||
        jQuery(
          ".product-single__meta .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale [data-currency]").attr("data-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("[data-add-to-cart-text], #AddToCartText-product-template")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title:first"],
      galleryItems: [
        ".product-single__photos .slick-slide.slick-active .zoomImg",
        ".product-single__photos .slick-slide.slick-active img",
      ],
      priceElements: ["#ProductPrice-product-template:visible"],
      addButton: ["button#AddToCart-product-template"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-single__photos .slick-slide.slick-active .zoomImg").attr(
          "src"
        ) ||
        jQuery(".product-single__photos .slick-slide.slick-active img").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-single__photos .slick-slide:not(.slick-cloned)").length > 0
      ) {
        $arr = [];
        jQuery(".product-single__photos .slick-slide:not(.slick-cloned)").each(
          function (index) {
            $img =
              jQuery(this).find(".zoomImg").attr("src") ||
              jQuery(this).find("img").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery("#ProductPrice-product-template:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ComparePrice-product-template:visible").text().trim() ||
        jQuery("#ProductPrice-product-template:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;      
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("button#AddToCart-product-template").is(":disabled");
      `,
    },
  },
  {
    conditions: {
      titleElement: [".prod__title h1:first"],
      galleryItems: [
        ".sf-prod-media__wrapper .swiper-slide.swiper-slide-active noscript",
        ".sf-prod-media__wrapper .swiper-slide.swiper-slide-active [data-media-src]",
        ".sf-prod-media__wrapper .swiper-slide.swiper-slide-active img[src]",
        ".sf-prod-media__wrapper .swiper-slide.product-medias__primary img[src]",
      ],
      priceElements: [".main-product .prod__price"],
      addButton: [
        ".product_atc_wrapper .add-to-cart",
        ".main-product .add-to-cart",
      ],
    },
    data: {
      productTitle: `
      jQuery(".prod__title h1:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".sf-prod-media__wrapper .swiper-slide.swiper-slide-active noscript")
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          ".sf-prod-media__wrapper .swiper-slide.swiper-slide-active [data-media-src]"
        ).attr("data-media-src") ||
        jQuery(
          ".sf-prod-media__wrapper .swiper-slide.swiper-slide-active img[src]"
        ).attr("src") ||
        jQuery(
          ".sf-prod-media__wrapper .swiper-slide.product-medias__primary img[src]"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".sf-prod-media__wrapper .swiper-slide").length > 0) {
        $arr = [];
        jQuery(".sf-prod-media__wrapper .swiper-slide").each(function (index) {
          $img =
            jQuery(this).find("[data-media-src]").attr("data-media-src") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img[data-srcset]").attr("data-srcset") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('[property="og:price:currency"]').attr("content");
      $pr = jQuery(".main-product .prod__price").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".main-product .prod__compare_price")
          .text()
      
          .trim() || jQuery(".main-product .prod__price").text().trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product_atc_wrapper .add-to-cart").hasClass("disabled") ||
        jQuery(".main-product .add-to-cart").hasClass("disabled");
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title:first"],
      galleryItems: [
        "product-gallery scroll-carousel .product-gallery__media.is-selected img",
        "product-gallery scroll-carousel .product-gallery__media:first img",
      ],
      priceElements: [
        ".product-info .price-list sale-price .money:first",
        ".product-info .price-list sale-price",
      ],
      addButton: ['.product-info .buy-buttons button[type="submit"]:first'],
    },
    data: {
      productTitle: `
      jQuery("h1.product-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          "product-gallery scroll-carousel .product-gallery__media.is-selected img"
        ).attr("src") ||
        jQuery(
          "product-gallery scroll-carousel .product-gallery__media:first img"
        ).attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery("product-gallery scroll-carousel .product-gallery__media").length > 0
      ) {
        $arr = [];
        jQuery("product-gallery scroll-carousel .product-gallery__media").each(
          function (index) {
            $img = jQuery(this).find("img").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery(".product-info .price-list sale-price .money:first")
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info .price-list sale-price")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim();
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-info .price-list compare-at-price:visible .money:first")
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info .price-list compare-at-price:visible")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info .price-list sale-price .money:first")
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery(".product-info .price-list sale-price")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim();
          `,
      stockStatus: `
      jQuery(".not-found:visible, .shopify-section--404:visible").length > 0 ||
        jQuery(".product-info sold-out-badge:visible").length > 0 ||
        jQuery('.product-info .buy-buttons button[type="submit"]:first:visible').is(
          ":disabled"
        );
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title:first"],
      galleryItems: [
        ".product-single__media-flex-wrapper.slick-active .product-single__media",
        ".product-single__media-flex-wrapper:first .product-single__media",
      ],
      priceElements: ["#ProductPrice"],
      addButton: ["#AddToCart--product-template"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-single__media-flex-wrapper.slick-active .product-single__media"
        ).attr("data-zoom") ||
        jQuery(
          ".product-single__media-flex-wrapper:first .product-single__media"
        ).attr("data-zoom") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)"
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-single__media-wrapper .product-single__media:not(.product-single__media--video)"
        ).each(function (index) {
          $img =
            jQuery(this).attr("data-zoom") || jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ComparePrice:visible .money").text().trim() ||
        jQuery("#ComparePrice:visible").text().trim() ||
        jQuery("#ProductPrice .money").text().trim() ||
        jQuery("#ProductPrice").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("#AddToCart--product-template")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_name:first"],
      galleryItems: [
        ".product-main .product-gallery__main .product-gallery__image.is-selected",
        ".product-main .product-gallery__main .product-gallery__image.is-selected img",
      ],
      priceElements: [
        ".product-main .price-ui .price.price--sale:first",
        ".product-main .price-ui .price:first",
      ],
      addButton: [
        ".product__information .purchase-details__buttons button.button--add-to-cart",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product_name:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(
            ".product-main .product-gallery__main .product-gallery__image.is-selected"
          )
            ?.find("noscript")
            ?.text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          ".product-main .product-gallery__main .product-gallery__image.is-selected img"
        ).attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          '.product-main .product-gallery__main .product-gallery__image:not([data-media-type="external_video"])'
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          '.product-main .product-gallery__main .product-gallery__image:not([data-media-type="external_video"])'
        ).each(function (index) {
          $img =
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(jQuery(this).find("noscript").text()).filter("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }  
          `,
      productPrice: `
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-main .price-ui .price.price--sale:first").text().trim() ||
        jQuery(".product-main .price-ui .price:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery('meta[property="og:price:currency"]').attr("content") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-main .price-ui .compare-at-price:first").text().trim() ||
        jQuery(".product-main .price-ui .price:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
            `,
      stockStatus: `
        jQuery(".error-404:visible").length > 0 ||
          jQuery(
            ".product__information .purchase-details__buttons button.button--add-to-cart"
          ).is(":disabled") ||
          (jQuery(".product__information").length > 0 &&
            jQuery(
              ".product__information .purchase-details__buttons button.button--add-to-cart"
            ).length == 0);
      `,
    },
  },
  {
    conditions: {
      titleElement: ['[data-hook="product-title"]'],
      galleryItems: [
        '[data-hook="main-media"] .slick-slide.slick-active img',
        '[data-hook="main-media"] .slick-slide.slick-active [data-hook="product-image"]',
      ],
      priceElements: [
        '[data-hook="product-price"] [data-hook="formatted-primary-price"]',
      ],
      addButton: ['[data-hook="add-to-cart"]'],
    },
    data: {
      productTitle: `
      jQuery('[data-hook="product-title"]').text().trim();
          `,
      mainImage: `
      $img =
        jQuery('[data-hook="main-media"] .slick-slide.slick-active img.zoomImg').attr(
          "src"
        ) ||
        jQuery(
          '[data-hook="main-media"] .slick-slide.slick-active [data-hook="product-image"]'
        ).attr("src") ||
        jQuery('[data-hook="main-media"] .slick-slide.slick-active img').attr(
          "src"
        ) ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery('[data-hook="main-media"] .slick-slide').length > 0) {
        $arr = [];
        jQuery('[data-hook="main-media"] .slick-slide').each(function (index) {
          $img =
            jQuery(this).find('[data-hook="product-image"]').attr("src") ||
            jQuery(this).find("img:first").attr("data-srcset") ||
            jQuery(this).find("img:first").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery(
        '[data-hook="product-price"] [data-hook="formatted-primary-price"]'
      )
        .text()
        ?.replace(/[\\s]/g, "")
        ?.trim();
      
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(
          '[data-hook="product-price"] [data-hook="formatted-secondary-price"]:visible'
        )
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim() ||
        jQuery('[data-hook="product-price"] [data-hook="formatted-primary-price"]')
          .text()
          ?.replace(/[\\s]/g, "")
          ?.trim();
      
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
            `,
      stockStatus: `
      jQuery(".error-404-non-branded:visible").length > 0 ||
        jQuery('[data-hook="out-of-stock-indicator"]').length > 0;
      `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_name"],
      galleryItems: [
        ".product .gallery-cell.is-selected img[data-src]",
        ".product_gallery .gallery-cell",
      ],
      priceElements: [
        ".product-main .price-ui .price.price--sale:first",
        ".product-main .price-ui .price:first",
      ],
      addButton: [
        ".product_form .purchase-details__buttons",
        ".product_section .add_to_cart",
      ],
    },
    data: {
      productTitle: `
      jQuery("h1.product_name").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product .gallery-cell.is-selected img[data-src]").attr("data-src") ||
        jQuery(".product .gallery-cell.is-selected img.zoomImg").attr("src") ||
        jQuery(".product_gallery .gallery-cell.is-selected img[data-src]").attr("data-src") ||
        jQuery(".product_gallery .gallery-cell.is-selected img.zoomImg").attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product_gallery .gallery-cell").length > 0) {
        $arr = [];
        jQuery(".product_gallery .gallery-cell").each(function (index) {
          $img =
            jQuery(this).find("img[data-src]").attr("data-src") ||
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (jQuery(".product .gallery-cell").length > 0) {
        $arr = [];
        jQuery(".product .gallery-cell").each(function (index) {
          $img =
            jQuery(this).find("img[data-src]").attr("data-src") ||
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery(".product_section .current_price .money").attr("data-currency") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-main .price-ui .price.price--sale:first").text().trim() ||
        jQuery(".product-main .price-ui .price:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery(".product_section .current_price .money").attr("data-currency") ||
        jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product-main .price-ui .compare-at-price:first").text().trim() ||
        jQuery(".product-main .price-ui .price:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".error-404:visible").length > 0 ||
        jQuery(".product_form .purchase-details__buttons").hasClass(
          "product-is-unavailable"
        ) ||
        jQuery(".product_section .add_to_cart").hasClass("disabled") ||
        jQuery(".product_section .add_to_cart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title:first"],
      galleryItems: [
        ".product-image .product-image-slideshow .slick-slide.slick-active img",
        ".product-image .product-image-slideshow .slick-slide",
      ],
      priceElements: [
        ".product-details [data-price-wrapper] [data-product-price]",
      ],
      addButton: ["[data-add-to-cart-text]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-image .product-image-slideshow .slick-slide.slick-active img[data-src]"
        ).attr("data-src") ||
        jQuery(
          ".product-image .product-image-slideshow .slick-slide.slick-active img"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
        if (jQuery(".product-image .product-image-slideshow .slick-slide").length > 0) {
          $arr = [];
          jQuery(".product-image .product-image-slideshow .slick-slide").each(function (
            index
          ) {
            $img =
              jQuery(this).find("img[data-src]").attr("data-src") ||
              jQuery(this).find("img").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
            if (index < 4) $arr.push($img);
          });
          $arr;
        }
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product-details [data-price-wrapper] [data-product-price]")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product-details [data-price-wrapper] [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product-details [data-price-wrapper] [data-product-price]")
          .text()
          .trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("[data-add-to-cart-text]")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-title:first"],
      galleryItems: [
        ".productImgSlider .product-image.is-selected img",
        ".productImgSlider .product-image:first img",
      ],
      priceElements: [".product [data-price-wrapper] [data-product-price]"],
      addButton: ["[data-add-to-cart-text]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-title:first")
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim() || jQuery("h1.product-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".productImgSlider .product-image.is-selected picture source[data-srcset]"
        )
          .attr("data-srcset")
          ?.split(",")
          ?.pop()
          ?.trim()
          ?.split(" ")?.[0] ||
        jQuery(".productImgSlider .product-image.is-selected img").attr("src") ||
        jQuery(".productImgSlider .product-image:first img").attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".productImgSlider .product-image").length > 0) {
        $arr = [];
        jQuery(".productImgSlider .product-image").each(function (index) {
          $img =
            jQuery(this)
              .find("picture source[data-srcset]")
              .attr("data-srcset")
              ?.split(",")
              ?.pop()
              ?.trim()
              ?.split(" ")?.[0] || jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product [data-price-wrapper] [data-product-price]")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product [data-price-wrapper] [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product [data-price-wrapper] [data-product-price]").text().trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("[data-add-to-cart-text]")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-detail__title:first"],
      galleryItems: [
        ".product-detail__images .product-detail__image.slick-current a[data-product-image]",
        ".product-detail__images .product-detail__image a[data-product-image]:first",
      ],
      priceElements: [
        ".product-detail .product-price .product-price__reduced",
        ".product-detail .product-detail__price.product-price:first",
      ],
      addButton: [".product-detail button[data-add-to-cart]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-detail__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-detail__images .product-detail__image.slick-current a[data-product-image]"
        ).attr("href") ||
        jQuery(
          ".product-detail__images .product-detail__image a[data-product-image]:first"
        ).attr("href") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-detail__images .product-detail__image a[data-product-image]")
          .length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-detail__images .product-detail__image a[data-product-image]"
        ).each(function (index) {
          $img =
            jQuery(this).attr("href") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              .filter("img")
              .attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }      
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product-detail .product-price .product-price__reduced")
          .text()
          .trim() ||
        jQuery(".product-detail .product-detail__price.product-price:first")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product-detail .product-price .product-price__compare")
          .text()
          .trim() ||
        jQuery(".product-detail .product-detail__price.product-price:first")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
       jQuery(".product-detail button[data-add-to-cart]").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product--title:first"],
      galleryItems: [
        ".product--image-container .image-slider--slide .image-slider--item .image--element",
      ],
      priceElements: [".product--details .product--price .price--content"],
    },
    data: {
      productTitle: `
      jQuery("h1.product--title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product--image-container .image-slider--slide .image-slider--item .image--element"
        ).attr("data-img-large") ||
        jQuery(
          ".product--image-container .image-slider--slide .image-slider--item .image--element"
        ).attr("data-img-original") ||
        jQuery(
          ".product--image-container .image-slider--slide .image-slider--item .image--element img[src]"
        ).attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product--image-container .image-slider--slide .image-slider--item")
          .length > 0
      ) {
        $arr = [];
        jQuery(
          ".product--image-container .image-slider--slide .image-slider--item"
        ).each(function (index) {
          $img =
            jQuery(this).find(".image--element").attr("data-img-large") ||
            jQuery(this).find(".image--element").attr("data-img-original") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }   
          `,
      productPrice: `
      $cr = jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr = jQuery(".product--details .product--price .price--content").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
      
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery(".product--details .product--price .price--line-through:visible")
          .text()
          .trim() ||
        jQuery(".product--details .product--price .price--content").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery('.product--details link[itemprop="availability"][href*="Out"]')
          .length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title:first"],
      galleryItems: [
        ".product-gallery__main .product-gallery__image.is-selected img",
      ],
      priceElements: [".product__price .current-price"],
      addButton: ["button.add_to_cart"],
    },
    data: {
      productTitle: `
      jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-gallery__main .product-gallery__image.is-selected .zoomImg"
        ).attr("src") ||
        jQuery(
          jQuery(
            ".product-gallery__main .product-gallery__image.is-selected noscript"
          )
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          ".product-gallery__main .product-gallery__image.is-selected img[src]"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          '.product-gallery__main .product-gallery__image:not([data-media-type="external_video"])'
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          '.product-gallery__main .product-gallery__image:not([data-media-type="external_video"])'
        ).each(function (index) {
          $img =
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }    
          `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product__price .current-price .money").text().trim() ||
        jQuery(".product__price .current-price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product__price .was-price .money").text().trim() ||
        jQuery(".product__price .was-price").text().trim() ||
        jQuery(".product__price .current-price .money").text().trim() ||
        jQuery(".product__price .current-price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product_form .purchase-details__buttons").hasClass(
          "product-is-unavailable"
        ) ||
        jQuery(".product_form .purchase-details__buttons button.add_to_cart").is(
          ":disabled"
        );
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title:first"],
      galleryItems: [
        ".product-gallery__main .product-gallery__image.is-selected img",
      ],
      priceElements: [".product__price .current-price"],
      addButton: ["button.add_to_cart"],
    },
    data: {
      productTitle: `
      jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-gallery__main .product-gallery__image.is-selected .zoomImg"
        ).attr("src") ||
        jQuery(
          jQuery(
            ".product-gallery__main .product-gallery__image.is-selected noscript"
          )
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          ".product-gallery__main .product-gallery__image.is-selected img[src]"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(
          '.product-gallery__main .product-gallery__image:not([data-media-type="external_video"])'
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          '.product-gallery__main .product-gallery__image:not([data-media-type="external_video"])'
        ).each(function (index) {
          $img =
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }    
          `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product__price .current-price .money").text().trim() ||
        jQuery(".product__price .current-price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".product__price .was-price .money").text().trim() ||
        jQuery(".product__price .was-price").text().trim() ||
        jQuery(".product__price .current-price .money").text().trim() ||
        jQuery(".product__price .current-price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product_form .purchase-details__buttons").hasClass(
          "product-is-unavailable"
        ) ||
        jQuery(".product_form .purchase-details__buttons button.add_to_cart").is(
          ":disabled"
        );
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.tt-title:first"],
      galleryItems: [
        ".tt-product-single-img .mediaimageholder img.zoom-product[src]",
      ],
      priceElements: [
        ".tt-product-single-info .tt-price .sale-price:visible",
        ".tt-product-single-info .tt-price .new-price",
      ],
      addButton: ["button.btn-addtocart"],
    },
    data: {
      productTitle: `
      jQuery("h1.tt-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".tt-product-single-img .mediaimageholder img.zoom-product[src]").attr(
          "src"
        ) || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".tt-product-single-carousel-vertical .slick-slide:not(.slick-cloned)")
          .length > 0
      ) {
        $arr = [];
        jQuery(
          ".tt-product-single-carousel-vertical .slick-slide:not(.slick-cloned)"
        ).each(function (index) {
          $img =
            jQuery(this).find("[data-zoom-image]").attr("data-zoom-image") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
          if (index < 4) $arr.push($img);
        });
        $arr;
      }  
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".tt-product-single-info .tt-price .sale-price:visible")
          .text()
          .trim() ||
        jQuery(".tt-product-single-info .tt-price .new-price").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".tt-product-single-info .tt-price .old-price:visible")
          .text()
          .trim() ||
        jQuery(".tt-product-single-info .tt-price .new-price").text().trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("button.btn-addtocart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-name .h1:first"],
      galleryItems: [
        ".product-gallery-container .product-image-gallery .gallery-image:first",
      ],
      priceElements: [
        ".product-shop .price-info-container .special-price .price",
        ".product-shop .price-info-container .regular-price .price",
      ],
      addButton: ["button.btn-cart"],
    },
    data: {
      productTitle: `
      jQuery(".product-name .h1:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image.visible"
        ).attr("data-zoom-image") ||
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image.visible"
        ).attr("src") ||
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image:first"
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-gallery-container .product-image-gallery .gallery-image")
          .length > 0
      ) {
        $arr = [];
        jQuery(
          ".product-gallery-container .product-image-gallery .gallery-image"
        ).each(function (index) {
          $img = jQuery(this).attr("data-zoom-image") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = "";

      try {
        $cr = JSON.parse(
          jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
            .text()
            .trim()
        ).offers[0].priceCurrency;
      } catch (e) {}
      
      $pr =
        jQuery(".product-shop .price-info-container .special-price .price")
          .text()
          .trim() ||
        jQuery(".product-shop .price-info-container .regular-price .price")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = "";

      try {
        $cr = JSON.parse(
          jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
            .text()
            .trim()
        ).offers[0].priceCurrency;
      } catch (e) {}
      
      $pr =
        jQuery(".product-shop .price-info-container .old-price .price:visible")
          .text()
          .trim() ||
        jQuery(".product-shop .price-info-container .special-price .price")
          .text()
          .trim() ||
        jQuery(".product-shop .price-info-container .regular-price .price")
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".cms-index-noroute.cms-not-found:visible").length > 0 ||
        jQuery(".product-essential .add-to-cart-wrapper .availability").hasClass(
          "out-of-stock"
        ) ||
        jQuery(".product-essential .add-to-cart-buttons button.btn-cart").is(
          ":disabled"
        );
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.productView-title:first"],
      galleryItems: [
        ".productView .productView-image.slick-active .productView-img-container",
        ".productView .productView-image .productView-img-container",
        ".productView-images .productView-img-wrapper img[src]",
      ],
      priceElements: [
        ".productView .productView-price [data-product-price-with-tax]:visible",
      ],
      addButton: ["#form-action-addToCart"],
    },
    data: {
      productTitle: `
      jQuery("h1.productView-title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".productView .productView-image.slick-active .productView-img-container [data-src]"
        ).attr("data-src") ||
        jQuery(
          ".productView .productView-image.slick-active .productView-img-container img"
        ).attr("src") ||
        jQuery(".productView .productView-image[data-zoom-image]").attr(
          "data-zoom-image"
        ) ||
        jQuery(".productView .productView-image .productView-img-container img").attr(
          "src"
        ) ||
        jQuery(".productView-images .productView-img-wrapper img[src]:first").attr(
          "src"
        ) ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".productView-images .productView-img-wrapper").length > 0) {
        $arr = [];
        jQuery(".productView-images .productView-img-wrapper").each(function (index) {
          $img = jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (jQuery(".productView .productView-thumbnail a").length > 0) {
        $arr = [];
        jQuery(".productView .productView-thumbnail a").each(function (index) {
          $img =
            jQuery(this).attr("data-image-gallery-zoom-image-url") ||
            jQuery(this).attr("data-image-gallery-new-image-url") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr = jQuery(
        ".productView .productView-price [data-product-price-with-tax]:visible"
      )
        .text()
        .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(".productView .productView-price [data-product-rrp-with-tax]:visible")
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-non-sale-price-with-tax]:visible"
        )
          .text()
          .trim() ||
        jQuery(
          ".productView .productView-price [data-product-price-with-tax]:visible"
        )
          .text()
          .trim();
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery('h1:contains("404 Error - Page not found"):visible').length > 0 ||
        jQuery(".productView-details #form-action-addToCart").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-name:first"],
      galleryItems: [
        ".product-detail .primary-images .pdp-carousel .slick-slide",
      ],
      priceElements: [".product-detail .prices:visible .sales .value:first"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-name:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-detail .primary-images .pdp-carousel .slick-slide.slick-active img[src]").attr("src") ||
        jQuery(".product-detail .primary-images .pdp-carousel .slick-slide:first img[src]").attr("src") ||
        jQuery('meta[property="og:image"]:first').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-detail .primary-images .pdp-carousel .slick-slide:not(.slick-cloned)").length > 0) {
        $arr = [];
        jQuery(".product-detail .primary-images .pdp-carousel .slick-slide:not(.slick-cloned)").each(function (
          index
        ) {
          $img = jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery(".product-detail .prices:visible .sales .value:first")
        .text()
        .trim();

      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }

      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product-detail .prices:visible .strike-through:visible .value:first")
          .text()
          .trim() ||
        jQuery(".product-detail .prices:visible .original-price:visible .value:first")
          .text()
          .trim() ||
        jQuery(".product-detail .prices:visible .sales .value:first").text().trim();

      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }

      $pr;
          `,
      stockStatus: `
      jQuery(
          ".product-detail .product-availability .availability-msg .not-available:visible"
        ).length > 0 || jQuery(".template-404:visible").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title:first"],
      galleryItems: [".product-single__photos .product__photo.is-selected img"],
      priceElements: [
        ".product__page [data-price-wrapper] [data-product-price]",
      ],
      addButton: ["[data-add-to-cart-text]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(
            ".product-single__photos .product__photo.is-selected noscript"
          )?.text()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".product-single__photos .product__photo.is-selected img[src]").attr(
          "src"
        ) ||
        jQuery('[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-single__photos .product__photo").length > 0) {
        $arr = [];
        jQuery(".product-single__photos .product__photo").each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") || jQuery(this).find("img[src]");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery("[data-price-wrapper] [data-product-price] .money").attr(
          "doubly-currency"
        ) || jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product__page [data-price-wrapper] [data-product-price]")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery("[data-price-wrapper] [data-product-price] .money").attr(
          "doubly-currency"
        ) || jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product__page [data-price-wrapper] [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product__page [data-price-wrapper] [data-product-price]")
          .text()
          .trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("[data-add-to-cart-text]")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title:first"],
      galleryItems: [
        ".product__media .product__media-item.slick-active img[src]",
        '.product__media .product__media-item:has([data-media-type="image"])',
      ],
      priceElements: [".product__meta .product__price [data-price]"],
      addButton: [".product__meta [data-add-to-cart]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product__media .product__media-item.slick-active img[src]").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery('.product__media .product__media-item:has([data-media-type="image"])')
          .length > 0
      ) {
        $arr = [];
        jQuery(
          '.product__media .product__media-item:has([data-media-type="image"])'
        ).each(function (index) {
          $img = jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery(".product__meta .product__price [data-price]").text().trim();

      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product__meta .product__price [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product__meta .product__price [data-price]").text().trim();
      
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product__meta [data-add-to-cart]").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: [
        ".product-content-detail .title-ls:first",
        "h1.product-single__title:first",
      ],
      galleryItems: [
        "img#product-page-feature-image",
        "#product-thumbnails img.slick-slide:not(.slick-cloned)",
        '[data-label="Product"]:first .gf_product-images-list .owl-item:not(.cloned)',
      ],
      priceElements: [
        "p#product-price .money",
        '[data-label="Product"]:first .gf_product-prices .gf_product-price .money:first',
      ],
      addButton: [
        ".product-content-detail button#btn-add-to-cart",
        '[data-label="Product"]:first button.gf_add-to-cart',
      ],
    },
    data: {
      productTitle: `
      jQuery(".product-content-detail .title-ls:first").text().trim() ||
        jQuery("h1.product-single__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery("img#product-page-feature-image").attr("src") ||
        jQuery(
          '[data-label="Product"] [data-label="Image"]:has(~[data-label="(P) Image List"]) img[src]'
        ).attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery("#product-thumbnails img.slick-slide:not(.slick-cloned)").length > 0
      ) {
        $arr = [];
        jQuery("#product-thumbnails img.slick-slide:not(.slick-cloned)").each(
          function (index) {
            $img = jQuery(this).attr("data-src") || jQuery(this).attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      } else if (
        jQuery(
          '[data-label="Product"] .gf_product-images-list .owl-item:not(.cloned)'
        ).length > 0
      ) {
        $arr = [];
        jQuery(
          '[data-label="Product"] .gf_product-images-list .owl-item:not(.cloned)'
        ).each(function (index) {
          $img =
            jQuery(this).find("[data-zoom]").attr("data-zoom") ||
            jQuery(this).find("[data-image]").attr("data-image") ||
            jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery(".money[doubly-currency]").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("p#product-price .money").text().trim() ||
        jQuery(
          '[data-label="Product"]:first .gf_product-prices .gf_product-price .money:first'
        )
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery(".money[doubly-currency]").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("p#product-compare-price .money:visible").text().trim() ||
        jQuery("p#product-price .money").text().trim() ||
        jQuery(
          '[data-label="Product"]:first .gf_product-prices .gf_product-compare-price:visible .money'
        )
          .text()
          .trim() ||
        jQuery(
          '[data-label="Product"]:first .gf_product-prices .gf_product-price .money'
        )
          .text()
          .trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-content-detail button#btn-add-to-cart").is(":disabled") ||
        jQuery('[data-label="Product"]:first button.gf_add-to-cart').is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-description-header:first"],
      galleryItems: [
        "#product-box .product-single__media.product-single__media--selected img",
        "#product-box .product-single__thumbnail__wrapper",
      ],
      priceElements: [".product-info-wrapper #price-field .money"],
      addButton: [".product-info-wrapper #purchase"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-description-header:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(
            "#product-box .product-single__media.product-single__media--selected noscript"
          )
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(
          "#product-box .product-single__media.product-single__media--selected img[data-zoom-img]"
        ).attr("data-zoom-img") ||
        jQuery(
          "#product-box .product-single__media.product-single__media--selected img[src]"
        ).attr("src") ||
        jQuery('meta[property="og:image"]:first').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery("#product-box .product-single__thumbnail__wrapper").length > 0) {
        $arr = [];
        jQuery("#product-box .product-single__thumbnail__wrapper").each(function (
          index
        ) {
          $img =
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") || jQury(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product-info-wrapper #price-field .money").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product-info-wrapper .compare-at-price:visible .money")
          .text()
          .trim() ||
        jQuery(".product-info-wrapper #price-field .money").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery(".product-info-wrapper #purchase").is(":disabled");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.page-title:first"],
      galleryItems: [
        ".product-top-main #amasty-main-container img#amasty-main-image",
        ".product-top-main #amasty-gallery-images a.amasty-gallery-thumb-link",
      ],
      priceElements: [
        '.product-info-price span[id^="product-price"][data-price-type]:first:visible',
      ],
      addButton: [
        ".product-info-stock-sku .stock",
        ".product-info-main .stock",
      ],
    },
    data: {
      productTitle: `jQuery("h1.page-title:first").text().trim();`,
      mainImage: `
      $img =
        jQuery("#amasty-main-container img#amasty-main-image").attr(
          "data-zoom-image"
        ) ||
        jQuery("#amasty-main-container img#amasty-main-image").attr("src") ||
        jQuery(".product.media img.gallery-placeholder__image").attr("src") ||
        jQuery('[property="og:image"]').attr("content");
      
      if ($img) {
        $img = $img.split("?")[0];
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
      }
          `,
      itemImages: `
      if (jQuery("#amasty-gallery-images a.amasty-gallery-thumb-link").length > 0) {
        $arr = [];
        jQuery("#amasty-gallery-images a.amasty-gallery-thumb-link").each(function (
          index
        ) {
          $img =
            jQuery(this).attr("data-zoom-image") ||
            jQuery(this).attr("data-image") ||
            jQuery(this).find("img").attr("data-image");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      } else if (jQuery(".product.media .gallery-placeholder__image").length > 0) {
        $arr = [];
        jQuery(".product.media .gallery-placeholder__image").each(function (index) {
          $img = jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr = jQuery(
        '.product-info-price span[id^="product-price"][data-price-type]:first:visible'
      )
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="product:price:currency"]').attr("content");
      $pr =
        jQuery(
          '.product-info-price span[id^="old-price"][data-price-type]:first:visible'
        )
          .text()
          .trim() ||
        jQuery(
          '.product-info-price span[id^="product-price"][data-price-type]:first:visible'
        )
          .text()
          .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible, .cms-no-route.cms-noroute-index:visible").length >
      0 || jQuery(".product-info-stock-sku .stock").hasClass("unavailable") || jQuery(".product-info-main .stock").hasClass("unavailable");
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-name"],
      galleryItems: [
        ".product-detail .product-gallery--main .swiper-slide:first img[src]",
      ],
      itemImagesItems: [".product-detail .product-gallery--main .swiper-slide"],
      priceElements: [".product-detail .prices:visible .sales .value:first"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-name:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-detail .product-gallery--main .swiper-slide.swiper-slide-active img[data-hires]").attr(
          "data-hires"
        ) || 
        jQuery(".product-detail .product-gallery--main .swiper-slide.swiper-slide-active img[src]").attr(
          "src"
        ) || 
        jQuery(".product-detail .product-gallery--main .swiper-slide:first img[src]").attr(
          "src"
        ) || jQuery('meta[property="og:image"]:first').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-detail .product-gallery--main .swiper-slide:not(.swiper-slide-video)").length > 0) {
        $arr = [];
        jQuery(".product-detail .product-gallery--main .swiper-slide:not(.swiper-slide-video)").each(function (
          index
        ) {
          $img = jQuery(this).find('img[data-hires]').attr("data-hires") || jQuery(this).find('img[src]').attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('[itemprop="priceCurrency"]').attr("content");
      $pr = jQuery(".product-detail .prices:visible .sales .value:first")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery(".product-detail .prices:visible .strike-through:visible .value:first")
          .text()
          .trim() ||
        jQuery(".product-detail .prices:visible .original-price:visible .value:first")
          .text()
          .trim() ||
        jQuery(".product-detail .prices:visible .sales .value:first").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(
          ".product-detail .product-availability .availability-msg .not-available:visible"
        ).length > 0 || jQuery(".template-404:visible").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-name:first", 'h1[itemprop="name"]'],
      galleryItems: [
        ".images-container .product-cover img[src]",
        ".images-container .product-images .thumb",
      ],
      priceElements: ['.product-prices .current-price [itemprop="price"]'],
      stockElement: ['.product-prices link[itemprop="availability"]'],
    },
    data: {
      productTitle: `
      jQuery('h1[itemprop="name"]').text().trim() ||
         jQuery("h1.product-name:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".images-container .product-cover #product-images-large .slick-slide.slick-active img[src]").attr("src") || 
        jQuery(".images-container .product-cover img[src]").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".images-container .product-images .thumb").length > 0) {
        $arr = [];
        jQuery(".images-container .product-images .thumb").each(function (index) {
          $img =
            jQuery(this).attr("data-image-large-src") ||
            jQuery(this).attr("data-image-medium-src") ||
            jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr = jQuery('.product-prices .current-price [itemprop="price"]').text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;      
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[itemprop="priceCurrency"]').attr("content");
      $pr =
        jQuery(".product-prices .product-discount span").text().trim() ||
        jQuery('.product-prices .current-price [itemprop="price"]').text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery('.product-prices link[itemprop="availability"][href*="Out"]').length >
        0;
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product__section-title h1"],
      galleryItems: [
        ".product-image-container .carousel-cell.is-selected img[data-zoom-src]",
        ".product-image-container .carousel-cell.is-selected img[src]",
        ".product-image-container .image-slide.carousel-cell",
      ],
      priceElements: [
        "#product-price .price__sale:visible .price-item.price-item--sale",
      ],
      stockElement: ["#AddToCart", "#addToCart"],
    },
    data: {
      productTitle: `
      jQuery(".product__section-title h1").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          ".product-image-container .carousel-cell.is-selected img[data-zoom-src]"
        ).attr("data-zoom-src") ||
        jQuery(
          jQuery(".product-image-container .carousel-cell.is-selected noscript")
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".product-image-container .carousel-cell.is-selected img[src]").attr(
          "src"
        ) ||
        jQuery('meta[property="og:image"]').attr("content");
      
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-image-container .image-slide.carousel-cell").length > 0) {
        $arr = [];
        jQuery(".product-image-container .image-slide.carousel-cell").each(function (
          index
        ) {
          $img =
            jQuery(this).find("img[data-zoom-src]").attr("data-zoom-src") ||
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find("img[src]").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr =
        jQuery("#product-price .price__sale:visible .price-item.price-item--sale")
          .text()
          .trim() ||
        jQuery(
          "#product-price .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;   
          `,
      productOriginalPrice: `
      $pr =
        jQuery("#product-price .price__sale:visible .price-item.price-item--regular")
          .text()
          .trim() ||
        jQuery(
          "#product-price .price__regular:visible .price-item.price-item--regular"
        )
          .text()
          .trim();
      
      $cr =
        jQuery(".price__sale .price-item--sale .money").attr("doubly-currency") ||
        jQuery('meta[property="og:price:currency"]').attr("content");
      
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery('#AddToCart[value*="Out"]').length > 0 || 
        jQuery('#addToCart[value*="Out"]').length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product_title"],
      galleryItems: [
        ".woocommerce-product-gallery__wrapper .owl-item.active img[src]",
      ],
      priceElements: [
        ".product .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi",
        ".product .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi",
        ".product p.price ins .woocommerce-Price-amount.amount:first bdi",
        ".product p.price .woocommerce-Price-amount.amount:first bdi",
      ],
      addButton: [".product .elementor .stock"],
    },
    data: {
      productTitle: `
      jQuery("h1.product_title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".woocommerce-product-gallery__wrapper .owl-item.active img[src]").attr(
          "src"
        ) || jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".woocommerce-product-gallery__wrapper .owl-item img").length > 0) {
        $arr = [];
        jQuery(".woocommerce-product-gallery__wrapper .owl-item img").each(function (
          index
        ) {
          $img = jQuery(this).attr("data-src") || jQuery(this).attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }      
          `,
      productPrice: `
      $pr =
        jQuery(".product .woocommerce-variation-price:visible .price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".product .woocommerce-variation-price:visible .price del + .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".product .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".product p.price ins .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".product p.price del + .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".product p.price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery(".product .woocommerce-variation-price:visible .price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".product .woocommerce-variation-price:visible .price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() || 
        jQuery(".product p.price del .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim() ||
        jQuery(".product p.price .woocommerce-Price-amount.amount:first bdi")
          .text()
          .trim();
      
      if ($pr.indexOf("$") > -1) {
        $pr = "USD" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("€") > -1) {
        $pr = "EUR" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      } else if ($pr.indexOf("£") > -1) {
        $pr = "GBP" + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");
      }
      
      $pr;
          `,
      stockStatus: `
      jQuery(".error404:visible").length > 0 ||
        jQuery(".product .elementor .stock").hasClass("out-of-stock");
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-details h1:first"],
      galleryItems: [".prod-featured-image img[src]"],
      priceElements: [
        ".product-details [data-price-wrapper] [data-product-price]",
      ],
      addButton: [".product-details button[data-add-to-cart]"],
    },
    data: {
      productTitle: `
      jQuery(".product-details h1:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery('.prod-featured-image img[src]').attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery('.product-additional-image a[data-fancybox="gallery"]').length > 0) {
        $arr = [];
        jQuery('.product-additional-image a[data-fancybox="gallery"]').each(function (index) {
          $img = jQuery(this).attr("href") || 
                 jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }      
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");

      $pr = jQuery('.product-details [data-price-wrapper] [data-product-price]').text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");

      $pr = jQuery('.product-details [data-price-wrapper] [data-compare-price]').text().trim() || 
            jQuery('.product-details [data-price-wrapper] [data-product-price]').text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;    
          `,
      stockStatus: `
      jQuery('.product-details button[data-add-to-cart]').is(":disabled") ||
        jQuery('.template-404:visible').length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product__title:first"],
      galleryItems: [
        ".product-single__photos .product__photo.slick-active img",
        ".product-single__photos .product__slide:not(.media--hidden) .product__photo:first img",
      ],
      priceElements: [
        ".product__page [data-price-wrapper] [data-product-price]",
      ],
      addButton: ["[data-add-to-cart-text]"],
    },
    data: {
      productTitle: `
      jQuery("h1.product__title:first").text().trim();
          `,
      mainImage: `
      $img =
      jQuery(
        ".product-single__photos .product__photo.slick-active img[data-src]:first"
      ).attr("data-src") ||
      jQuery(
        ".product-single__photos .product__slide.is-selected .product__photo:first img[data-src]:first"
      ).attr("data-src") ||
      jQuery(
        ".product-single__photos .product__slide:not(.media--hidden) .product__photo:first img[data-src]:first"
      ).attr("data-src") ||
      jQuery(
        ".product-single__photos .product__photo.slick-active img[src]:first"
      ).attr("src") ||
      jQuery('meta[property="og:image"]').attr("content");
    if ($img) {
      $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
      $img = $img.split("?")[0];
    }
          `,
      itemImages: `
      if (jQuery(".product-single__photos .product__photo").length > 0) {
        $arr = [];
        jQuery(".product-single__photos .product__photo").each(function (index) {
          $img =
            jQuery(this).find("img[data-src]:first").attr("data-src") ||
            jQuery(this).find("img[src]:first").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr =
        jQuery("[data-price-wrapper] [data-product-price] .money").attr(
          "doubly-currency"
        ) || jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery(".product__page [data-price-wrapper] [data-product-price]")
        .text()
        .trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr =
        jQuery("[data-price-wrapper] [data-product-price] .money").attr(
          "doubly-currency"
        ) || jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery(".product__page [data-price-wrapper] [data-compare-price]:visible")
          .text()
          .trim() ||
        jQuery(".product__page [data-price-wrapper] [data-product-price]")
          .text()
          .trim();
      $cr && $pr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("[data-add-to-cart-text]")
          .text()
          .trim()
          .toLowerCase()
          .indexOf("out") != -1;
          `,
    },
  },
  {
    conditions: {
      titleElement: [".product-page h1:first"],
      galleryItems: [".product-main-images .product-main-image.selected img"],
      priceElements: ["#product-price .product-price"],
      addButton: [".product-add-to-cart input#AddToCart"],
    },
    data: {
      productTitle: `
      jQuery(".product-page h1:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(
          jQuery(".product-main-images .product-main-image.selected noscript")
            .text()
            ?.trim()
        )
          ?.filter("img")
          ?.attr("src") ||
        jQuery(".product-main-images .product-main-image.selected .zoomImg").attr(
          "src"
        ) ||
        jQuery(".product-main-images .product-main-image img:first").attr("src") ||
        jQuery('meta[property="og:image:secure_url"]').attr("content") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (jQuery(".product-main-images .product-main-image").length > 0) {
        $arr = [];
        jQuery(".product-main-images .product-main-image").each(function (index) {
          $img =
            jQuery(jQuery(this).find("noscript").text()?.trim())
              ?.filter("img")
              ?.attr("src") ||
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img[src]:first").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $pr = jQuery("#product-price .product-price").text().trim();
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = $cr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      productOriginalPrice: `
      $pr =
        jQuery("#product-price .was").text().trim() ||
        jQuery("#product-price .product-old-price").text().trim() ||
        jQuery("#product-price .product-price").text().trim();
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = $cr
        ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
        : $pr;
          `,
      stockStatus: `
      jQuery(".product-add-to-cart input#AddToCart").is(":disabled") ||
        jQuery("body.404:visible").length > 0;
          `,
    },
  },
  {
    conditions: {
      titleElement: ["h1.product-single__title:first"],
      galleryItems: [
        ".product-single__photos .slick-slide.slick-active img",
        ".photos .product-single__photo:not(.hide)",
      ],
      priceElements: ["#ProductPrice-product-template:visible"],
      addButton: ["button#AddToCart-product-template"],
    },
    data: {
      productTitle: `
      jQuery("h1.product-single__title:first").text().trim();
          `,
      mainImage: `
      $img =
        jQuery(".product-single__photos .slick-slide.slick-active .zoomImg").attr(
          "src"
        ) ||
        jQuery(".product-single__photos .slick-slide.slick-active img").attr("src") ||
        jQuery(".photos .product-single__photo:not(.hide) img").attr("src") ||
        jQuery('meta[property="og:image"]').attr("content");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
          `,
      itemImages: `
      if (
        jQuery(".product-single__photos .slick-slide:not(.slick-cloned)").length > 0
      ) {
        $arr = [];
        jQuery(".product-single__photos .slick-slide:not(.slick-cloned)").each(
          function (index) {
            $img =
              jQuery(this).find(".zoomImg").attr("src") ||
              jQuery(this).find("img").attr("src");
            if ($img) {
              $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
              $img = $img.split("?")[0];
            }
      
            if (index < 4) $arr.push($img);
          }
        );
        $arr;
      } else if (jQuery(".photos .product-single__photo").length > 0) {
        $arr = [];
        jQuery(".photos .product-single__photo").each(function (index) {
          $img =
            jQuery(this).find(".zoomImg").attr("src") ||
            jQuery(this).find("img").attr("src");
          if ($img) {
            $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
            $img = $img.split("?")[0];
          }
      
          if (index < 4) $arr.push($img);
        });
        $arr;
      }
          `,
      productPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr = jQuery("#ProductPrice-product-template:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      productOriginalPrice: `
      $cr = jQuery('meta[property="og:price:currency"]').attr("content");
      $pr =
        jQuery("#ComparePrice-product-template:visible").text().trim() ||
        jQuery("#ProductPrice-product-template:visible").text().trim();
      $pr =
        $cr && $pr
          ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
          : $pr;
          `,
      stockStatus: `
      jQuery(".template-404:visible").length > 0 ||
        jQuery("button#AddToCart-product-template").is(":disabled");
          `,
    },
  },
];
