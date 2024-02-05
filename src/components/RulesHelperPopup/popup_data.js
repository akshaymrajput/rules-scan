const coupons = [
  {
    conditions: {
      couponInput: [],
      submitButton: [],
      totalPrice: [],
    },
    data: {
      couponInput: ``,
      submitButton: ``,
      totalPrice: ``,
    },
  },
];

const skeleton = {
  rules: `
  /* RULES SKELETON */

  // Product Title

  jQuery('PRODUCT_NAME_SELECTOR').text().trim();

  // Brand Name

  var brand = "";
  try {
    brand = JSON.parse(
      jQuery('[type="application/ld+json"]:contains(brand)').text().trim()
    ).brand.name;
  } catch (e) {}

  brand = brand ? brand : "SITE_NAME";

  // Product Description

  jQuery('meta[property="og:description"]').attr("content")?.trim() ||
  jQuery('meta[name="description"]').attr("content")?.trim();

  // Main Image
  
  $img =
    jQuery('PRODUCT_MAIN_IMAGE_SELECTOR').attr("src") ||
    jQuery('meta[property="og:image:secure_url"]').attr("content") ||
    jQuery('meta[property="og:image"]').attr("content");
  if ($img) {
    $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
    $img = $img.split("?")[0];
  }

  // Item Images
  
  if (jQuery("PRODUCT_ITEM_IMAGES_SELECTOR").length > 0) {
    $arr = [];
    jQuery("PRODUCT_ITEM_IMAGES_SELECTOR").each(function (index) {
      $img = jQuery(this).find("[data-src]").attr("data-src") || 
             jQuery(this).find("img").attr("src");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
  
      if (index < 4) $arr.push($img);
    });
    $arr;
  }

  // Price Getter

  $cr = jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[property="og:price:currency"]').attr("content");

  $pr = jQuery('PRODUCT_PRICE_SELECTOR').text().trim();
  $pr =
    $cr && $pr
      ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
      : $pr;

  // Original Price Getter

  $cr = jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[property="og:price:currency"]').attr("content");

  $pr = jQuery('PRODUCT_ORIGINAL_PRICE_SELECTOR').text().trim() || 
        jQuery('PRODUCT_PRICE_SELECTOR').text().trim();
  $pr =
    $cr && $pr
      ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
      : $pr;
  
  // Stock Status Getter

  jQuery('ADD_TO_CART_SELECTOR').is(":disabled") ||
  jQuery('OUT_OF_STOCK_INDICATOR_SELECTOR').is(":visible") ||
    jQuery('404_PAGE_SELECTOR').length > 0;
  `,
};

module.exports = {
  coupons,
  skeleton,
};
