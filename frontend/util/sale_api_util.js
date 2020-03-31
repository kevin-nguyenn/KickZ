export const fetchSales = (shoe_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}/sales`
    })
};

export const fetchLastSale = (shoe_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}/sales/last`
    })
};

export const fetchSalesBySize = (shoe_id, size) => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}/sales/${size}`
    })
};

export const createSale = (sale) => {
    return $.ajax({
        method: 'POST',
        url: '/api/sales',
        data: { sale }
    })
};

export const updateSale = (sale) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/sales/${sale.id}`,
        data: { sale }
    })
};