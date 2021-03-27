using System;
using System.Collections.Generic;

namespace API.Services
{
  public interface IPickService
  {
    public T PickOneRandomWeighted<T>(Dictionary<int, T> values);
  }

  public class PickService : IPickService
  {
    private readonly Random _rand;

    public PickService()
    {
      _rand = new Random();
    }

    // Taken from https://softwareengineering.stackexchange.com/a/150642
    // Credit goes to user Nevermind
    public T PickOneRandomWeighted<T>(Dictionary<int, T> valuePairs)
    {
      int totalAmount = 0;
      T selected = default;
      foreach (var (amount, data) in valuePairs)
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
