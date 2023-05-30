export function filterData(searchText, allRestaurant) {
    return allRestaurant.filter((res) =>
        res?.title?.toLowerCase().startsWith(searchText.toLowerCase()))
}
