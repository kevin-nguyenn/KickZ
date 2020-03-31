export const fetchSales = (shoe_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}/sales`
    })
);

export const fetchLastSale = (shoe_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}/sales/last`
    })
);

export const fetchSalesBySize = (shoe_id, size) => (
    $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}/sales/${size}`
    })
);

export const createSale = (sale) => (
    $.ajax({
        method: 'POST',
        url: '/api/sales',
        data: { sale }
    })
);

export const updateSale = (sale) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/sales/${sale.id}`,
        data: { sale }
    })
);