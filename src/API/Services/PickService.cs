using System;
using System.Collections.Generic;
using System.Linq;
using API.Models;
using API.Models.Exceptions;

namespace API.Services
{
  public interface IPickService
  {
    public string PickADoor(IEnumerable<DoorModel> doors, int switches);
  }

  public class PickService : IPickService
  {
    private readonly Random _rand;

    public PickService()
    {
      _rand = new Random();
    }

    public string PickADoor(IEnumerable<DoorModel> doors, int switches)
    {

      var allDoors = doors.ToDictionary(d => d.Content, d => d.Amount);
      var openableByMontyDoors = doors.Where(d => d.CanBeOpenedByMonty).ToDictionary(d => d.Content, d => d.Amount);

      // For n amount of switches there must be at least n + 1 amount of doors
      // that can be opened by Monty
      if (openableByMontyDoors.Sum(d => d.Value) - 1 < switches)
      {
        throw new TooManySwitchesException("The amount of doors openable by Monty needs to be 1 more than the number of switches made");
      }

      var selectedDoor = PickOneRandomWeighted(allDoors);

      for (int i = 0; i < switches; i++)
      {
        allDoors[selectedDoor] -= 1;
        if (openableByMontyDoors.ContainsKey(selectedDoor))
        {
          openableByMontyDoors[selectedDoor] -= 1;
        }

        var doorOpenedByMonty = PickOneRandomWeighted(openableByMontyDoors);
        openableByMontyDoors[doorOpenedByMonty] -= 1;
        allDoors[doorOpenedByMonty] -= 1;

        selectedDoor = PickOneRandomWeighted(allDoors);
      }

      return selectedDoor;
    }

    // Taken from https://softwareengineering.stackexchange.com/a/150642
    // Credit goes to user Nevermind
    private T PickOneRandomWeighted<T>(Dictionary<T, int> valuePairs)
    {
      int totalAmount = 0;
      T selected = default;
      foreach (var (data, amount) in valuePairs)
      {
        int r = _rand.Next(totalAmount + amount);
        if (r >= totalAmount)
          selected = data;
        totalAmount += amount;
      }

      return selected;
    }
  }
}
