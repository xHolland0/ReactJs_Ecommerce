using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ErrorController : ControllerBase
{
    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound(); // 404 Hata Numarası
    }


    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest(); // 400 Hata Numarası
    }


    [HttpGet("unauthorized")]
    public IActionResult UnAuthorizedError()
    {
        return Unauthorized(); // 401 Hata Numarası
    }


    [HttpGet("validation-error")]
    public IActionResult ValidationError()
    {
        ModelState.AddModelError("validation error 1", "validation eror details");
        ModelState.AddModelError("validation error 2", "validation eror details");

        return ValidationProblem();
    }


    [HttpGet("server-error")]
    public IActionResult ServerError()
    {
        throw new Exception("server error"); // 500 Hata Numarası
    }

}