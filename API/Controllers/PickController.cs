using System;
using System.Collections.Generic;
using System.Linq;
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
    public IActionResult PickOne<T>(IEnumerable<DoorModel<T>> doors, int switches)
    {
      try
      {
        return StatusCode(200, _pickService.PickADoor(doors, switches));
      }
      catch (TooManySwitchesException e)
      {
        //log exception
        return StatusCode(400, "The amount of doors openable by Monty needs to be 2 more than the number of switches made");
      }
      catch (Exception e)
      {
        //log exception
        return StatusCode(500, "Unknown error occured");
      }
    }
  }
}
