using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using XcodeTest.Models;
using XCode;
using Newtonsoft.Json.Linq;
using XCode.Membership;
using XCode.DataAccessLayer;
using ConnName;
using NewLife.Serialization;
using System.Collections.Generic;

namespace XcodeTest.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult GetUserList()
        {

            var user2 = DtUser.FindAll();



            return Json(new
            {
                //Code = 0,
                //Msg = "ok",
                list = user2.ToJson(),
            });
        }
    }
}