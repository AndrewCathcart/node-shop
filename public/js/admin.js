const deleteProduct = btn => {
  const prodId = btn.parentNode.querySelector("input[name=productId]").value;
  const csrf = btn.parentNode.querySelector("input[name=_csrf]").value;

  const productElement = btn.closest("article");

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf
    }
  })
    .then(res => {
      console.log(res);
      productElement.parentNode.removeChild(productElement);
    })
    .catch(err => {
      console.log(err);
    });
};
