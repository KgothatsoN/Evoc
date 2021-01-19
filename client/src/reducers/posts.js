//reducer function
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload];
        
        case 'DELETE_POST':
            return posts.filter((post) => post._id !== action.payload);

        case 'UPDATE_POST':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
        
    }
};