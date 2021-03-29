using System;
using System.Collections.Generic;
using API.Models;
using API.Models.Exceptions;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Route("api/[controller]")]
  public class PickController : Controller
  {
    private readonly IPickService _pickService;

    public PickController(IPickService pickService)
    {
      _pickService = pickService;
    }

    [HttpGet]
    public string Happy()
    {
      return "Hello";
    }

    [HttpPost]
    public IActionResult PickOne<T>([FromBody] IEnumerable<DoorModel<T>> doors, [FromBody] int switches)
    {
      try
      {
        return StatusCode(200, _pickService.PickADoor(doors, switches));
      }
      catch (TooManySwitchesException e)
      {
        //log exception
        return StatusCode(400, e.Message);
      }
      catch (Exception e)
      {
        //log exception
        return StatusCode(500);
      }
    }
  }
}
