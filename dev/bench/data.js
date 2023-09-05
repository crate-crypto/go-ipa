window.BENCHMARK_DATA = {
  "lastUpdate": 1693941932826,
  "repoUrl": "https://github.com/crate-crypto/go-ipa",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "committer": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "distinct": true,
          "id": "2029b704e21cd7a1b0eece5f50bcac0c1ee1d724",
          "message": "add report\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-05T15:33:19-03:00",
          "tree_id": "34caa17333ea81903ad3759da13ce23cca756b9c",
          "url": "https://github.com/crate-crypto/go-ipa/commit/2029b704e21cd7a1b0eece5f50bcac0c1ee1d724"
        },
        "date": 1693940883851,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1266291,
            "unit": "ns/op",
            "extra": "919 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1791938,
            "unit": "ns/op",
            "extra": "702 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2771237,
            "unit": "ns/op",
            "extra": "436 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4923169,
            "unit": "ns/op",
            "extra": "277 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 7792716,
            "unit": "ns/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 13926728,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 23415030,
            "unit": "ns/op",
            "extra": "52 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 47448459,
            "unit": "ns/op",
            "extra": "27 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 80102612,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 143603365,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 259093005,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 493117629,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 950137646,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1770141301,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3496131921,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 6581409957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 13142350053,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 24835003307,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 45728049748,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 89044704910,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 6618529619,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 19244053711,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 73.61,
            "unit": "ns/op",
            "extra": "15954568 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 7.592,
            "unit": "ns/op",
            "extra": "152235214 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.54,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 16.25,
            "unit": "ns/op",
            "extra": "70976833 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 3022,
            "unit": "ns/op",
            "extra": "413358 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.827,
            "unit": "ns/op",
            "extra": "144902854 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11069,
            "unit": "ns/op",
            "extra": "110432 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.896,
            "unit": "ns/op",
            "extra": "239081857 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.648,
            "unit": "ns/op",
            "extra": "215343967 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.211,
            "unit": "ns/op",
            "extra": "218294226 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.951,
            "unit": "ns/op",
            "extra": "297965155 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3085,
            "unit": "ns/op",
            "extra": "414356 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 19.41,
            "unit": "ns/op",
            "extra": "67291323 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 27.09,
            "unit": "ns/op",
            "extra": "49123020 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 25.89,
            "unit": "ns/op",
            "extra": "49585051 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 10532,
            "unit": "ns/op",
            "extra": "107650 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 25.76,
            "unit": "ns/op",
            "extra": "45766917 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 42.64,
            "unit": "ns/op",
            "extra": "25800166 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 9072,
            "unit": "ns/op",
            "extra": "123661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "123661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "123661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 19123,
            "unit": "ns/op",
            "extra": "67424 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "67424 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "67424 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 38763,
            "unit": "ns/op",
            "extra": "32656 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "32656 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "32656 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 100278,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22400,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 350,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 260468,
            "unit": "ns/op",
            "extra": "4483 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 55296,
            "unit": "B/op",
            "extra": "4483 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 864,
            "unit": "allocs/op",
            "extra": "4483 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 557577,
            "unit": "ns/op",
            "extra": "2072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120320,
            "unit": "B/op",
            "extra": "2072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1880,
            "unit": "allocs/op",
            "extra": "2072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1304345,
            "unit": "ns/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250880,
            "unit": "B/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3920,
            "unit": "allocs/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2726600,
            "unit": "ns/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 512128,
            "unit": "B/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 8002,
            "unit": "allocs/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 5386450,
            "unit": "ns/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1032192,
            "unit": "B/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16128,
            "unit": "allocs/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9266273170,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306652576,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 7616978,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "committer": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "distinct": true,
          "id": "2029b704e21cd7a1b0eece5f50bcac0c1ee1d724",
          "message": "add report\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-05T15:33:19-03:00",
          "tree_id": "34caa17333ea81903ad3759da13ce23cca756b9c",
          "url": "https://github.com/crate-crypto/go-ipa/commit/2029b704e21cd7a1b0eece5f50bcac0c1ee1d724"
        },
        "date": 1693940883851,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1266291,
            "unit": "ns/op",
            "extra": "919 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1791938,
            "unit": "ns/op",
            "extra": "702 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2771237,
            "unit": "ns/op",
            "extra": "436 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4923169,
            "unit": "ns/op",
            "extra": "277 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 7792716,
            "unit": "ns/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 13926728,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 23415030,
            "unit": "ns/op",
            "extra": "52 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 47448459,
            "unit": "ns/op",
            "extra": "27 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 80102612,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 143603365,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 259093005,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 493117629,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 950137646,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1770141301,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3496131921,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 6581409957,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 13142350053,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 24835003307,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 45728049748,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 89044704910,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 6618529619,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 19244053711,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 73.61,
            "unit": "ns/op",
            "extra": "15954568 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 7.592,
            "unit": "ns/op",
            "extra": "152235214 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.54,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 16.25,
            "unit": "ns/op",
            "extra": "70976833 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 3022,
            "unit": "ns/op",
            "extra": "413358 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.827,
            "unit": "ns/op",
            "extra": "144902854 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11069,
            "unit": "ns/op",
            "extra": "110432 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.896,
            "unit": "ns/op",
            "extra": "239081857 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.648,
            "unit": "ns/op",
            "extra": "215343967 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.211,
            "unit": "ns/op",
            "extra": "218294226 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.951,
            "unit": "ns/op",
            "extra": "297965155 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3085,
            "unit": "ns/op",
            "extra": "414356 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 19.41,
            "unit": "ns/op",
            "extra": "67291323 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 27.09,
            "unit": "ns/op",
            "extra": "49123020 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 25.89,
            "unit": "ns/op",
            "extra": "49585051 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 10532,
            "unit": "ns/op",
            "extra": "107650 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 25.76,
            "unit": "ns/op",
            "extra": "45766917 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 42.64,
            "unit": "ns/op",
            "extra": "25800166 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 9072,
            "unit": "ns/op",
            "extra": "123661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "123661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "123661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 19123,
            "unit": "ns/op",
            "extra": "67424 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "67424 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "67424 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 38763,
            "unit": "ns/op",
            "extra": "32656 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "32656 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "32656 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 100278,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22400,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 350,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 260468,
            "unit": "ns/op",
            "extra": "4483 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 55296,
            "unit": "B/op",
            "extra": "4483 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 864,
            "unit": "allocs/op",
            "extra": "4483 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 557577,
            "unit": "ns/op",
            "extra": "2072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120320,
            "unit": "B/op",
            "extra": "2072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1880,
            "unit": "allocs/op",
            "extra": "2072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1304345,
            "unit": "ns/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250880,
            "unit": "B/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3920,
            "unit": "allocs/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2726600,
            "unit": "ns/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 512128,
            "unit": "B/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 8002,
            "unit": "allocs/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 5386450,
            "unit": "ns/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1032192,
            "unit": "B/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16128,
            "unit": "allocs/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9266273170,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306652576,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 7616978,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "committer": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "distinct": true,
          "id": "11c788ae061c0bc3ef1c649d572329c5762313ac",
          "message": "tune configuration\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-05T16:19:51-03:00",
          "tree_id": "0cb7c1466444285e8214bdeab48c992e9d4a2e99",
          "url": "https://github.com/crate-crypto/go-ipa/commit/11c788ae061c0bc3ef1c649d572329c5762313ac"
        },
        "date": 1693941931941,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1257852,
            "unit": "ns/op",
            "extra": "938 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1764075,
            "unit": "ns/op",
            "extra": "721 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2788764,
            "unit": "ns/op",
            "extra": "445 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4617235,
            "unit": "ns/op",
            "extra": "272 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 7667494,
            "unit": "ns/op",
            "extra": "144 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 13907683,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 24067089,
            "unit": "ns/op",
            "extra": "52 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 44507164,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 77751452,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 141952198,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 251982493,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 490409743,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 949062551,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1738576318,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3432386765,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 6508633496,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 13131583242,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 25129323279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 46653389994,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 90986738457,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 6545720448,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 19569297355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 75.53,
            "unit": "ns/op",
            "extra": "15985882 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 7.606,
            "unit": "ns/op",
            "extra": "157003122 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.33,
            "unit": "ns/op",
            "extra": "116780415 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 16.84,
            "unit": "ns/op",
            "extra": "66095698 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2970,
            "unit": "ns/op",
            "extra": "399193 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.836,
            "unit": "ns/op",
            "extra": "150515246 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11232,
            "unit": "ns/op",
            "extra": "101241 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.838,
            "unit": "ns/op",
            "extra": "248586373 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.45,
            "unit": "ns/op",
            "extra": "219259942 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.238,
            "unit": "ns/op",
            "extra": "232767054 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 4.047,
            "unit": "ns/op",
            "extra": "294453792 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3015,
            "unit": "ns/op",
            "extra": "393121 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 19.78,
            "unit": "ns/op",
            "extra": "59973168 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 26.85,
            "unit": "ns/op",
            "extra": "43344728 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 26.74,
            "unit": "ns/op",
            "extra": "45180085 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 11152,
            "unit": "ns/op",
            "extra": "107868 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 26.31,
            "unit": "ns/op",
            "extra": "43801200 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 44.66,
            "unit": "ns/op",
            "extra": "26905195 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 9507,
            "unit": "ns/op",
            "extra": "127707 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "127707 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "127707 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 20126,
            "unit": "ns/op",
            "extra": "62158 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "62158 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "62158 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 39128,
            "unit": "ns/op",
            "extra": "32485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "32485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "32485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 107936,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22528,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 352,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 268580,
            "unit": "ns/op",
            "extra": "4542 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 55040,
            "unit": "B/op",
            "extra": "4542 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 860,
            "unit": "allocs/op",
            "extra": "4542 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 589909,
            "unit": "ns/op",
            "extra": "2048 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120448,
            "unit": "B/op",
            "extra": "2048 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1882,
            "unit": "allocs/op",
            "extra": "2048 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1255693,
            "unit": "ns/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250112,
            "unit": "B/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3908,
            "unit": "allocs/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2688070,
            "unit": "ns/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 511232,
            "unit": "B/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 7988,
            "unit": "allocs/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 5450068,
            "unit": "ns/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1034240,
            "unit": "B/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16160,
            "unit": "allocs/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9521359107,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306652672,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 7616979,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}