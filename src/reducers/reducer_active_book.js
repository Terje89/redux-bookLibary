import bookList from "../containers/book-list";

export default function(state = null, action) {

    switch(action.type) {
        case 'BOOK_SELECTED':
            return bookList.selected;
    }

    return state
}