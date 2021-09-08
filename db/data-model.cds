namespace my.bookshop;

@assert.unique : {title : [title]}
entity Books {
    key ID    : Integer;
        title : String;
        stock : Integer;
}
