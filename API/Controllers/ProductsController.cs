using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]         // => api/products
public class ProductController(DataContext context) : ControllerBase
{
    private readonly DataContext _context = context;


    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        return Ok(products);
    }


    // => api/products/1
    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(int id)
    {
        if (id == null)
        {
            return NotFound(); //404 Page
        }

        //var product = await _context.Products.FirstOrDefaultAsync(i=> i.Id == id);
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            return NotFound();
        }
        
        return Ok(product);
    }

}