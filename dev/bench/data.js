window.BENCHMARK_DATA = {
  "lastUpdate": 1698089278027,
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
          "id": "a2b7c5332f5a628a6fb7b5f99f62a8f3e49eb1e6",
          "message": "reduce sensitivity\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-05T16:27:27-03:00",
          "tree_id": "e1733d9b984044bad8e9ef7a4f6f8282806d7db9",
          "url": "https://github.com/crate-crypto/go-ipa/commit/a2b7c5332f5a628a6fb7b5f99f62a8f3e49eb1e6"
        },
        "date": 1693942366514,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1145793,
            "unit": "ns/op",
            "extra": "1035 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1632674,
            "unit": "ns/op",
            "extra": "764 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2625092,
            "unit": "ns/op",
            "extra": "468 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4689198,
            "unit": "ns/op",
            "extra": "286 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 7379375,
            "unit": "ns/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 13207421,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 22633257,
            "unit": "ns/op",
            "extra": "52 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 40511802,
            "unit": "ns/op",
            "extra": "30 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 75466390,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 136250359,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 240941334,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 447792730,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 884323166,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1589029731,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3147498908,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 6015336089,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 12062921192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 23165109410,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 42898515219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 83465614390,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 6060813317,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 17892804253,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.58,
            "unit": "ns/op",
            "extra": "17645346 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.093,
            "unit": "ns/op",
            "extra": "148172306 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.28,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.71,
            "unit": "ns/op",
            "extra": "67890705 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2793,
            "unit": "ns/op",
            "extra": "434240 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.192,
            "unit": "ns/op",
            "extra": "165883146 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12700,
            "unit": "ns/op",
            "extra": "97372 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.965,
            "unit": "ns/op",
            "extra": "241956721 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.016,
            "unit": "ns/op",
            "extra": "239412774 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.912,
            "unit": "ns/op",
            "extra": "243680179 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.944,
            "unit": "ns/op",
            "extra": "309410954 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2780,
            "unit": "ns/op",
            "extra": "435040 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.44,
            "unit": "ns/op",
            "extra": "53475711 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.67,
            "unit": "ns/op",
            "extra": "39068695 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 31.96,
            "unit": "ns/op",
            "extra": "37643004 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12114,
            "unit": "ns/op",
            "extra": "99001 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 32.03,
            "unit": "ns/op",
            "extra": "37366842 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.34,
            "unit": "ns/op",
            "extra": "29469062 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 8486,
            "unit": "ns/op",
            "extra": "141805 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "141805 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "141805 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 17349,
            "unit": "ns/op",
            "extra": "69621 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "69621 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "69621 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 33974,
            "unit": "ns/op",
            "extra": "36157 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "36157 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "36157 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 90478,
            "unit": "ns/op",
            "extra": "12829 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22528,
            "unit": "B/op",
            "extra": "12829 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 352,
            "unit": "allocs/op",
            "extra": "12829 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 240739,
            "unit": "ns/op",
            "extra": "4683 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 55040,
            "unit": "B/op",
            "extra": "4683 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 860,
            "unit": "allocs/op",
            "extra": "4683 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 540814,
            "unit": "ns/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120704,
            "unit": "B/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1886,
            "unit": "allocs/op",
            "extra": "2140 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1127894,
            "unit": "ns/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250624,
            "unit": "B/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3916,
            "unit": "allocs/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2441707,
            "unit": "ns/op",
            "extra": "492 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 511616,
            "unit": "B/op",
            "extra": "492 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 7994,
            "unit": "allocs/op",
            "extra": "492 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 5060398,
            "unit": "ns/op",
            "extra": "240 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1035136,
            "unit": "B/op",
            "extra": "240 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16174,
            "unit": "allocs/op",
            "extra": "240 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9242218038,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306653232,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 7616980,
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
          "id": "f2aecbce0bbef07c0430e61658077745c17fabd9",
          "message": "remove alerting\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-05T16:34:22-03:00",
          "tree_id": "1d45c3713a45a721e7b75b307e612e9d5eb30f6b",
          "url": "https://github.com/crate-crypto/go-ipa/commit/f2aecbce0bbef07c0430e61658077745c17fabd9"
        },
        "date": 1693942782725,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1172446,
            "unit": "ns/op",
            "extra": "1050 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1652820,
            "unit": "ns/op",
            "extra": "753 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2631077,
            "unit": "ns/op",
            "extra": "457 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4595842,
            "unit": "ns/op",
            "extra": "285 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 7417188,
            "unit": "ns/op",
            "extra": "164 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 13050948,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 22459459,
            "unit": "ns/op",
            "extra": "54 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 42766348,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 75977777,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 141479327,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 242299298,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 459821066,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 870068879,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1602124481,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3195634988,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 6061136035,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 11999329013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 23061783005,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 42668759183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 83744446409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 6164880811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 18265341480,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.7,
            "unit": "ns/op",
            "extra": "17782123 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.096,
            "unit": "ns/op",
            "extra": "148172122 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.29,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.65,
            "unit": "ns/op",
            "extra": "67950200 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2757,
            "unit": "ns/op",
            "extra": "437610 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.285,
            "unit": "ns/op",
            "extra": "163437974 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12147,
            "unit": "ns/op",
            "extra": "102440 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.958,
            "unit": "ns/op",
            "extra": "242123478 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.018,
            "unit": "ns/op",
            "extra": "239221614 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.928,
            "unit": "ns/op",
            "extra": "245252293 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.911,
            "unit": "ns/op",
            "extra": "308416809 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2808,
            "unit": "ns/op",
            "extra": "429699 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.41,
            "unit": "ns/op",
            "extra": "53414670 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.73,
            "unit": "ns/op",
            "extra": "39097191 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 31.87,
            "unit": "ns/op",
            "extra": "37636872 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12119,
            "unit": "ns/op",
            "extra": "98989 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 32.08,
            "unit": "ns/op",
            "extra": "37330003 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.48,
            "unit": "ns/op",
            "extra": "29364175 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 8497,
            "unit": "ns/op",
            "extra": "142072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "142072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "142072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 17141,
            "unit": "ns/op",
            "extra": "70905 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "70905 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "70905 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 33987,
            "unit": "ns/op",
            "extra": "36060 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "36060 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "36060 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 91454,
            "unit": "ns/op",
            "extra": "12934 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22528,
            "unit": "B/op",
            "extra": "12934 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 352,
            "unit": "allocs/op",
            "extra": "12934 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 237105,
            "unit": "ns/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 54656,
            "unit": "B/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 854,
            "unit": "allocs/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 533536,
            "unit": "ns/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120320,
            "unit": "B/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1880,
            "unit": "allocs/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1126647,
            "unit": "ns/op",
            "extra": "1044 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250496,
            "unit": "B/op",
            "extra": "1044 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3914,
            "unit": "allocs/op",
            "extra": "1044 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2443010,
            "unit": "ns/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 511104,
            "unit": "B/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 7986,
            "unit": "allocs/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 5073576,
            "unit": "ns/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1034752,
            "unit": "B/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16168,
            "unit": "allocs/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9302793543,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306652816,
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
          "id": "f2aecbce0bbef07c0430e61658077745c17fabd9",
          "message": "remove alerting\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-05T16:34:22-03:00",
          "tree_id": "1d45c3713a45a721e7b75b307e612e9d5eb30f6b",
          "url": "https://github.com/crate-crypto/go-ipa/commit/f2aecbce0bbef07c0430e61658077745c17fabd9"
        },
        "date": 1693942782725,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1172446,
            "unit": "ns/op",
            "extra": "1050 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1652820,
            "unit": "ns/op",
            "extra": "753 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2631077,
            "unit": "ns/op",
            "extra": "457 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4595842,
            "unit": "ns/op",
            "extra": "285 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 7417188,
            "unit": "ns/op",
            "extra": "164 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 13050948,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 22459459,
            "unit": "ns/op",
            "extra": "54 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 42766348,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 75977777,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 141479327,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 242299298,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 459821066,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 870068879,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1602124481,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3195634988,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 6061136035,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 11999329013,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 23061783005,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 42668759183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 83744446409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 6164880811,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 18265341480,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.7,
            "unit": "ns/op",
            "extra": "17782123 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.096,
            "unit": "ns/op",
            "extra": "148172122 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.29,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.65,
            "unit": "ns/op",
            "extra": "67950200 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2757,
            "unit": "ns/op",
            "extra": "437610 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.285,
            "unit": "ns/op",
            "extra": "163437974 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12147,
            "unit": "ns/op",
            "extra": "102440 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.958,
            "unit": "ns/op",
            "extra": "242123478 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.018,
            "unit": "ns/op",
            "extra": "239221614 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.928,
            "unit": "ns/op",
            "extra": "245252293 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.911,
            "unit": "ns/op",
            "extra": "308416809 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2808,
            "unit": "ns/op",
            "extra": "429699 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.41,
            "unit": "ns/op",
            "extra": "53414670 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.73,
            "unit": "ns/op",
            "extra": "39097191 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 31.87,
            "unit": "ns/op",
            "extra": "37636872 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12119,
            "unit": "ns/op",
            "extra": "98989 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 32.08,
            "unit": "ns/op",
            "extra": "37330003 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.48,
            "unit": "ns/op",
            "extra": "29364175 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 8497,
            "unit": "ns/op",
            "extra": "142072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "142072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "142072 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 17141,
            "unit": "ns/op",
            "extra": "70905 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "70905 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "70905 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 33987,
            "unit": "ns/op",
            "extra": "36060 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "36060 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "36060 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 91454,
            "unit": "ns/op",
            "extra": "12934 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22528,
            "unit": "B/op",
            "extra": "12934 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 352,
            "unit": "allocs/op",
            "extra": "12934 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 237105,
            "unit": "ns/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 54656,
            "unit": "B/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 854,
            "unit": "allocs/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 533536,
            "unit": "ns/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120320,
            "unit": "B/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1880,
            "unit": "allocs/op",
            "extra": "2132 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1126647,
            "unit": "ns/op",
            "extra": "1044 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250496,
            "unit": "B/op",
            "extra": "1044 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3914,
            "unit": "allocs/op",
            "extra": "1044 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2443010,
            "unit": "ns/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 511104,
            "unit": "B/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 7986,
            "unit": "allocs/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 5073576,
            "unit": "ns/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1034752,
            "unit": "B/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16168,
            "unit": "allocs/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9302793543,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306652816,
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
      },
      {
        "commit": {
          "author": {
            "email": "jsign.uy@gmail.com",
            "name": "Ignacio Hagopian",
            "username": "jsign"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9a18e81e78b20ed1b096b414661d42623430e66",
          "message": "ci: add benchmark report generation (#57)\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-07T14:01:39+01:00",
          "tree_id": "3406932e48195a40ada8ae26e6fda90acad9111d",
          "url": "https://github.com/crate-crypto/go-ipa/commit/a9a18e81e78b20ed1b096b414661d42623430e66"
        },
        "date": 1694092022352,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1006137,
            "unit": "ns/op",
            "extra": "1130 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1481056,
            "unit": "ns/op",
            "extra": "837 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2486485,
            "unit": "ns/op",
            "extra": "531 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4200606,
            "unit": "ns/op",
            "extra": "300 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 6469726,
            "unit": "ns/op",
            "extra": "188 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 11626590,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 20655632,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 37620052,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 66764861,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 122472483,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 214320949,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 418767223,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 823788762,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1520347682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3053417977,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 5809856837,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 11363459713,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 21945198715,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 40846333996,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 78885742839,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 5839730528,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 17437781269,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 62.71,
            "unit": "ns/op",
            "extra": "19036478 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 6.46,
            "unit": "ns/op",
            "extra": "185878633 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 8.745,
            "unit": "ns/op",
            "extra": "134717647 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 14.17,
            "unit": "ns/op",
            "extra": "84850411 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2465,
            "unit": "ns/op",
            "extra": "480841 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 6.578,
            "unit": "ns/op",
            "extra": "182005040 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 9323,
            "unit": "ns/op",
            "extra": "124804 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.071,
            "unit": "ns/op",
            "extra": "294767079 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 4.605,
            "unit": "ns/op",
            "extra": "260784163 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.377,
            "unit": "ns/op",
            "extra": "272451409 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.401,
            "unit": "ns/op",
            "extra": "352767880 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2553,
            "unit": "ns/op",
            "extra": "463467 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 16.74,
            "unit": "ns/op",
            "extra": "71630749 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 22.54,
            "unit": "ns/op",
            "extra": "53384551 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 22.39,
            "unit": "ns/op",
            "extra": "53566618 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 9275,
            "unit": "ns/op",
            "extra": "127236 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 22.31,
            "unit": "ns/op",
            "extra": "53769439 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 36.17,
            "unit": "ns/op",
            "extra": "32285031 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 8054,
            "unit": "ns/op",
            "extra": "151339 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "151339 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "151339 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 16207,
            "unit": "ns/op",
            "extra": "75820 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "75820 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "75820 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 32242,
            "unit": "ns/op",
            "extra": "37248 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "37248 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "37248 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 85976,
            "unit": "ns/op",
            "extra": "13581 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22400,
            "unit": "B/op",
            "extra": "13581 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 350,
            "unit": "allocs/op",
            "extra": "13581 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 220967,
            "unit": "ns/op",
            "extra": "5186 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 54912,
            "unit": "B/op",
            "extra": "5186 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 858,
            "unit": "allocs/op",
            "extra": "5186 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 482382,
            "unit": "ns/op",
            "extra": "2419 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120064,
            "unit": "B/op",
            "extra": "2419 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1876,
            "unit": "allocs/op",
            "extra": "2419 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1038416,
            "unit": "ns/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250624,
            "unit": "B/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3916,
            "unit": "allocs/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2225631,
            "unit": "ns/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 511488,
            "unit": "B/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 7992,
            "unit": "allocs/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 4545620,
            "unit": "ns/op",
            "extra": "267 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1034752,
            "unit": "B/op",
            "extra": "267 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16168,
            "unit": "allocs/op",
            "extra": "267 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 7989165215,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306653080,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 7616982,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9a18e81e78b20ed1b096b414661d42623430e66",
          "message": "ci: add benchmark report generation (#57)\n\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-07T14:01:39+01:00",
          "tree_id": "3406932e48195a40ada8ae26e6fda90acad9111d",
          "url": "https://github.com/crate-crypto/go-ipa/commit/a9a18e81e78b20ed1b096b414661d42623430e66"
        },
        "date": 1694092022352,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 1006137,
            "unit": "ns/op",
            "extra": "1130 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1481056,
            "unit": "ns/op",
            "extra": "837 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2486485,
            "unit": "ns/op",
            "extra": "531 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 4200606,
            "unit": "ns/op",
            "extra": "300 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 6469726,
            "unit": "ns/op",
            "extra": "188 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 11626590,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 20655632,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 37620052,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 66764861,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 122472483,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 214320949,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 418767223,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 823788762,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1520347682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 3053417977,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 5809856837,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 11363459713,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 21945198715,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 40846333996,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 78885742839,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 5839730528,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 17437781269,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 62.71,
            "unit": "ns/op",
            "extra": "19036478 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 6.46,
            "unit": "ns/op",
            "extra": "185878633 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 8.745,
            "unit": "ns/op",
            "extra": "134717647 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 14.17,
            "unit": "ns/op",
            "extra": "84850411 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2465,
            "unit": "ns/op",
            "extra": "480841 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 6.578,
            "unit": "ns/op",
            "extra": "182005040 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 9323,
            "unit": "ns/op",
            "extra": "124804 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.071,
            "unit": "ns/op",
            "extra": "294767079 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 4.605,
            "unit": "ns/op",
            "extra": "260784163 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.377,
            "unit": "ns/op",
            "extra": "272451409 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.401,
            "unit": "ns/op",
            "extra": "352767880 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2553,
            "unit": "ns/op",
            "extra": "463467 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 16.74,
            "unit": "ns/op",
            "extra": "71630749 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 22.54,
            "unit": "ns/op",
            "extra": "53384551 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 22.39,
            "unit": "ns/op",
            "extra": "53566618 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 9275,
            "unit": "ns/op",
            "extra": "127236 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 22.31,
            "unit": "ns/op",
            "extra": "53769439 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 36.17,
            "unit": "ns/op",
            "extra": "32285031 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 8054,
            "unit": "ns/op",
            "extra": "151339 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 2048,
            "unit": "B/op",
            "extra": "151339 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "151339 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 16207,
            "unit": "ns/op",
            "extra": "75820 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 4096,
            "unit": "B/op",
            "extra": "75820 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 64,
            "unit": "allocs/op",
            "extra": "75820 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 32242,
            "unit": "ns/op",
            "extra": "37248 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "37248 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 128,
            "unit": "allocs/op",
            "extra": "37248 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 85976,
            "unit": "ns/op",
            "extra": "13581 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 22400,
            "unit": "B/op",
            "extra": "13581 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 350,
            "unit": "allocs/op",
            "extra": "13581 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 220967,
            "unit": "ns/op",
            "extra": "5186 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 54912,
            "unit": "B/op",
            "extra": "5186 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 858,
            "unit": "allocs/op",
            "extra": "5186 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 482382,
            "unit": "ns/op",
            "extra": "2419 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 120064,
            "unit": "B/op",
            "extra": "2419 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 1876,
            "unit": "allocs/op",
            "extra": "2419 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 1038416,
            "unit": "ns/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 250624,
            "unit": "B/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 3916,
            "unit": "allocs/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 2225631,
            "unit": "ns/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 511488,
            "unit": "B/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 7992,
            "unit": "allocs/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 4545620,
            "unit": "ns/op",
            "extra": "267 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 1034752,
            "unit": "B/op",
            "extra": "267 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 16168,
            "unit": "allocs/op",
            "extra": "267 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 7989165215,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 1306653080,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 7616982,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "607ff1f35a06f8472d630a1b9e16197c811be77f",
          "message": "Merge pull request #58 from crate-crypto/jsign-update-gnark\n\nmod: update gnark-crypto",
          "timestamp": "2023-09-07T10:25:56-03:00",
          "tree_id": "f22ae9ab8d8e8fd0b5d3e1861eb36e7a64736ba9",
          "url": "https://github.com/crate-crypto/go-ipa/commit/607ff1f35a06f8472d630a1b9e16197c811be77f"
        },
        "date": 1694093449887,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 878704,
            "unit": "ns/op",
            "extra": "1408 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1215758,
            "unit": "ns/op",
            "extra": "1003 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1913693,
            "unit": "ns/op",
            "extra": "620 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3286602,
            "unit": "ns/op",
            "extra": "381 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5322006,
            "unit": "ns/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9397049,
            "unit": "ns/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 16328959,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 29427704,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 53478784,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 95749903,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 177977421,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 323110188,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 632847284,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1227228156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2358018268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4580220188,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 9015566170,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 17249183378,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 32047511395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 62018158351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4670325459,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13767005679,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 75.37,
            "unit": "ns/op",
            "extra": "15970180 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.029,
            "unit": "ns/op",
            "extra": "147552580 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.81,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.87,
            "unit": "ns/op",
            "extra": "65835146 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 3141,
            "unit": "ns/op",
            "extra": "356290 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 8.152,
            "unit": "ns/op",
            "extra": "147380800 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11742,
            "unit": "ns/op",
            "extra": "106272 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.93,
            "unit": "ns/op",
            "extra": "245657649 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.554,
            "unit": "ns/op",
            "extra": "208766614 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.444,
            "unit": "ns/op",
            "extra": "228657804 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 4.097,
            "unit": "ns/op",
            "extra": "284355196 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3152,
            "unit": "ns/op",
            "extra": "396898 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 20.66,
            "unit": "ns/op",
            "extra": "57060510 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 28.04,
            "unit": "ns/op",
            "extra": "42525916 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 27.64,
            "unit": "ns/op",
            "extra": "38484870 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 11813,
            "unit": "ns/op",
            "extra": "102450 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 27.79,
            "unit": "ns/op",
            "extra": "44374027 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 47.13,
            "unit": "ns/op",
            "extra": "23772898 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 6181,
            "unit": "ns/op",
            "extra": "193357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "193357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "193357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 12188,
            "unit": "ns/op",
            "extra": "90219 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90219 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90219 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 24035,
            "unit": "ns/op",
            "extra": "51216 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51216 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51216 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 67477,
            "unit": "ns/op",
            "extra": "18074 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18074 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18074 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 179309,
            "unit": "ns/op",
            "extra": "7040 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7040 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7040 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 395121,
            "unit": "ns/op",
            "extra": "3168 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3168 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3168 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 829612,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1785444,
            "unit": "ns/op",
            "extra": "698 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "698 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "698 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3725139,
            "unit": "ns/op",
            "extra": "280 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9586273069,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827052672,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123224,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "607ff1f35a06f8472d630a1b9e16197c811be77f",
          "message": "Merge pull request #58 from crate-crypto/jsign-update-gnark\n\nmod: update gnark-crypto",
          "timestamp": "2023-09-07T10:25:56-03:00",
          "tree_id": "f22ae9ab8d8e8fd0b5d3e1861eb36e7a64736ba9",
          "url": "https://github.com/crate-crypto/go-ipa/commit/607ff1f35a06f8472d630a1b9e16197c811be77f"
        },
        "date": 1694093449887,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 878704,
            "unit": "ns/op",
            "extra": "1408 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1215758,
            "unit": "ns/op",
            "extra": "1003 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1913693,
            "unit": "ns/op",
            "extra": "620 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3286602,
            "unit": "ns/op",
            "extra": "381 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5322006,
            "unit": "ns/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9397049,
            "unit": "ns/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 16328959,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 29427704,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 53478784,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 95749903,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 177977421,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 323110188,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 632847284,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1227228156,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2358018268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4580220188,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 9015566170,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 17249183378,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 32047511395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 62018158351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4670325459,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13767005679,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 75.37,
            "unit": "ns/op",
            "extra": "15970180 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.029,
            "unit": "ns/op",
            "extra": "147552580 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.81,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.87,
            "unit": "ns/op",
            "extra": "65835146 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 3141,
            "unit": "ns/op",
            "extra": "356290 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 8.152,
            "unit": "ns/op",
            "extra": "147380800 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11742,
            "unit": "ns/op",
            "extra": "106272 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.93,
            "unit": "ns/op",
            "extra": "245657649 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.554,
            "unit": "ns/op",
            "extra": "208766614 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.444,
            "unit": "ns/op",
            "extra": "228657804 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 4.097,
            "unit": "ns/op",
            "extra": "284355196 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3152,
            "unit": "ns/op",
            "extra": "396898 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 20.66,
            "unit": "ns/op",
            "extra": "57060510 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 28.04,
            "unit": "ns/op",
            "extra": "42525916 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 27.64,
            "unit": "ns/op",
            "extra": "38484870 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 11813,
            "unit": "ns/op",
            "extra": "102450 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 27.79,
            "unit": "ns/op",
            "extra": "44374027 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 47.13,
            "unit": "ns/op",
            "extra": "23772898 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 6181,
            "unit": "ns/op",
            "extra": "193357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "193357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "193357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 12188,
            "unit": "ns/op",
            "extra": "90219 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90219 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90219 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 24035,
            "unit": "ns/op",
            "extra": "51216 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51216 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51216 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 67477,
            "unit": "ns/op",
            "extra": "18074 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18074 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18074 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 179309,
            "unit": "ns/op",
            "extra": "7040 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7040 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7040 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 395121,
            "unit": "ns/op",
            "extra": "3168 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3168 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3168 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 829612,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1785444,
            "unit": "ns/op",
            "extra": "698 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "698 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "698 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3725139,
            "unit": "ns/op",
            "extra": "280 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9586273069,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827052672,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123224,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de5e505e95bfcb13e1877560c612ec9a8ae839d9",
          "message": "Fuzz point deserialization (#60)\n\n* banderwagon: add uncompressed point deserialization fuzz test\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: fix panic found by fuzzer\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: add fuzz for compressed point\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: check for compressed point size\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* fuzz: add more corpus data\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: only accept normalized X coordinates\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-11T17:36:31+01:00",
          "tree_id": "d25664c92373647a9993ba4d37ac752ccc9046e9",
          "url": "https://github.com/crate-crypto/go-ipa/commit/de5e505e95bfcb13e1877560c612ec9a8ae839d9"
        },
        "date": 1694450457308,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 823075,
            "unit": "ns/op",
            "extra": "1453 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1287161,
            "unit": "ns/op",
            "extra": "938 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1904831,
            "unit": "ns/op",
            "extra": "663 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3093830,
            "unit": "ns/op",
            "extra": "392 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5119987,
            "unit": "ns/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9755612,
            "unit": "ns/op",
            "extra": "136 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 17087865,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30187503,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 52752759,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 97068538,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 178041685,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 335342541,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 640452844,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1190274319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2297731253,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4470280663,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 8894238055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 17136806890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 31969208267,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 61521963340,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4452562594,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13756444940,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 75.59,
            "unit": "ns/op",
            "extra": "15904102 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 7.618,
            "unit": "ns/op",
            "extra": "154821555 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.29,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.15,
            "unit": "ns/op",
            "extra": "71947867 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2974,
            "unit": "ns/op",
            "extra": "380266 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 8.126,
            "unit": "ns/op",
            "extra": "146642961 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11423,
            "unit": "ns/op",
            "extra": "108514 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.953,
            "unit": "ns/op",
            "extra": "245787360 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.48,
            "unit": "ns/op",
            "extra": "220339700 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.345,
            "unit": "ns/op",
            "extra": "228750583 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 4.022,
            "unit": "ns/op",
            "extra": "285473882 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3044,
            "unit": "ns/op",
            "extra": "403582 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 19.92,
            "unit": "ns/op",
            "extra": "58844193 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 26.83,
            "unit": "ns/op",
            "extra": "44864368 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 26.95,
            "unit": "ns/op",
            "extra": "44238309 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 11591,
            "unit": "ns/op",
            "extra": "106384 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 26.54,
            "unit": "ns/op",
            "extra": "43549608 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 43.76,
            "unit": "ns/op",
            "extra": "26135702 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 5894,
            "unit": "ns/op",
            "extra": "172114 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "172114 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "172114 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 11346,
            "unit": "ns/op",
            "extra": "100156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 22647,
            "unit": "ns/op",
            "extra": "53130 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53130 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53130 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 62127,
            "unit": "ns/op",
            "extra": "19207 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19207 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19207 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 163129,
            "unit": "ns/op",
            "extra": "7033 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7033 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7033 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 358554,
            "unit": "ns/op",
            "extra": "3399 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3399 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3399 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 824590,
            "unit": "ns/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1616766,
            "unit": "ns/op",
            "extra": "681 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "681 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "681 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3498154,
            "unit": "ns/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9057353073,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827051904,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123216,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de5e505e95bfcb13e1877560c612ec9a8ae839d9",
          "message": "Fuzz point deserialization (#60)\n\n* banderwagon: add uncompressed point deserialization fuzz test\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: fix panic found by fuzzer\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: add fuzz for compressed point\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: check for compressed point size\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* fuzz: add more corpus data\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* banderwagon: only accept normalized X coordinates\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-11T17:36:31+01:00",
          "tree_id": "d25664c92373647a9993ba4d37ac752ccc9046e9",
          "url": "https://github.com/crate-crypto/go-ipa/commit/de5e505e95bfcb13e1877560c612ec9a8ae839d9"
        },
        "date": 1694450457308,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 823075,
            "unit": "ns/op",
            "extra": "1453 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1287161,
            "unit": "ns/op",
            "extra": "938 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1904831,
            "unit": "ns/op",
            "extra": "663 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3093830,
            "unit": "ns/op",
            "extra": "392 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5119987,
            "unit": "ns/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9755612,
            "unit": "ns/op",
            "extra": "136 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 17087865,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30187503,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 52752759,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 97068538,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 178041685,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 335342541,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 640452844,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1190274319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2297731253,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4470280663,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 8894238055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 17136806890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 31969208267,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 61521963340,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4452562594,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13756444940,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 75.59,
            "unit": "ns/op",
            "extra": "15904102 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 7.618,
            "unit": "ns/op",
            "extra": "154821555 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 10.29,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.15,
            "unit": "ns/op",
            "extra": "71947867 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2974,
            "unit": "ns/op",
            "extra": "380266 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 8.126,
            "unit": "ns/op",
            "extra": "146642961 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11423,
            "unit": "ns/op",
            "extra": "108514 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.953,
            "unit": "ns/op",
            "extra": "245787360 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.48,
            "unit": "ns/op",
            "extra": "220339700 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 5.345,
            "unit": "ns/op",
            "extra": "228750583 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 4.022,
            "unit": "ns/op",
            "extra": "285473882 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3044,
            "unit": "ns/op",
            "extra": "403582 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 19.92,
            "unit": "ns/op",
            "extra": "58844193 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 26.83,
            "unit": "ns/op",
            "extra": "44864368 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 26.95,
            "unit": "ns/op",
            "extra": "44238309 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 11591,
            "unit": "ns/op",
            "extra": "106384 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 26.54,
            "unit": "ns/op",
            "extra": "43549608 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 43.76,
            "unit": "ns/op",
            "extra": "26135702 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 5894,
            "unit": "ns/op",
            "extra": "172114 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "172114 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "172114 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 11346,
            "unit": "ns/op",
            "extra": "100156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 22647,
            "unit": "ns/op",
            "extra": "53130 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53130 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53130 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 62127,
            "unit": "ns/op",
            "extra": "19207 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19207 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19207 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 163129,
            "unit": "ns/op",
            "extra": "7033 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7033 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7033 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 358554,
            "unit": "ns/op",
            "extra": "3399 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3399 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3399 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 824590,
            "unit": "ns/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1521 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1616766,
            "unit": "ns/op",
            "extra": "681 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "681 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "681 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3498154,
            "unit": "ns/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9057353073,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827051904,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123216,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b03fcb8e586b6dfa456801a6fe050b309e8bdf",
          "message": "fuzz proofs & add errcheck linter (#61)\n\n* multiproof: fuzz proof APIs\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* linter: add errcheck\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* fuzz: add multiproof testdata\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* check all errors\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* multiproof: read Multiproof should expect an exact number of bytes\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* fr: allow SetBytesLE to check canonical deserialization\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* improve apis\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-14T14:56:12+01:00",
          "tree_id": "5751c04e7302c48fb1d3eed4e0801552ed61efad",
          "url": "https://github.com/crate-crypto/go-ipa/commit/d1b03fcb8e586b6dfa456801a6fe050b309e8bdf"
        },
        "date": 1694700038609,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 803180,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1178567,
            "unit": "ns/op",
            "extra": "1020 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1933436,
            "unit": "ns/op",
            "extra": "631 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3200962,
            "unit": "ns/op",
            "extra": "372 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5431088,
            "unit": "ns/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9185435,
            "unit": "ns/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 16918688,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30427867,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 54569691,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 98078391,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 178188250,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 329408459,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 632084890,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1185489685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2324344621,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4491194936,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 8801872272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 17060032408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 31673122521,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 61298755123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4482765350,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13444884683,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.85,
            "unit": "ns/op",
            "extra": "17689168 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.076,
            "unit": "ns/op",
            "extra": "148787443 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.16,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.73,
            "unit": "ns/op",
            "extra": "67689358 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2764,
            "unit": "ns/op",
            "extra": "414558 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.521,
            "unit": "ns/op",
            "extra": "159744720 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12192,
            "unit": "ns/op",
            "extra": "98408 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.963,
            "unit": "ns/op",
            "extra": "240175040 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.017,
            "unit": "ns/op",
            "extra": "239024120 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.872,
            "unit": "ns/op",
            "extra": "245636373 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.215,
            "unit": "ns/op",
            "extra": "372973538 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2841,
            "unit": "ns/op",
            "extra": "427638 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.22,
            "unit": "ns/op",
            "extra": "53805829 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.26,
            "unit": "ns/op",
            "extra": "39662929 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 32.54,
            "unit": "ns/op",
            "extra": "36897949 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12086,
            "unit": "ns/op",
            "extra": "99060 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 32.07,
            "unit": "ns/op",
            "extra": "37431760 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.67,
            "unit": "ns/op",
            "extra": "29508055 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 6180,
            "unit": "ns/op",
            "extra": "183429 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183429 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183429 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 12015,
            "unit": "ns/op",
            "extra": "96313 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96313 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96313 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 23685,
            "unit": "ns/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 64596,
            "unit": "ns/op",
            "extra": "18543 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18543 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18543 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 158667,
            "unit": "ns/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 366984,
            "unit": "ns/op",
            "extra": "3214 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3214 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3214 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 806464,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1683746,
            "unit": "ns/op",
            "extra": "709 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "709 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "709 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3487804,
            "unit": "ns/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9187649230,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827052008,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123220,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b03fcb8e586b6dfa456801a6fe050b309e8bdf",
          "message": "fuzz proofs & add errcheck linter (#61)\n\n* multiproof: fuzz proof APIs\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* linter: add errcheck\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* fuzz: add multiproof testdata\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* check all errors\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* multiproof: read Multiproof should expect an exact number of bytes\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* fr: allow SetBytesLE to check canonical deserialization\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* improve apis\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-09-14T14:56:12+01:00",
          "tree_id": "5751c04e7302c48fb1d3eed4e0801552ed61efad",
          "url": "https://github.com/crate-crypto/go-ipa/commit/d1b03fcb8e586b6dfa456801a6fe050b309e8bdf"
        },
        "date": 1694700038609,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 803180,
            "unit": "ns/op",
            "extra": "1458 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1178567,
            "unit": "ns/op",
            "extra": "1020 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1933436,
            "unit": "ns/op",
            "extra": "631 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3200962,
            "unit": "ns/op",
            "extra": "372 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5431088,
            "unit": "ns/op",
            "extra": "220 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9185435,
            "unit": "ns/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 16918688,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30427867,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 54569691,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 98078391,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 178188250,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 329408459,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 632084890,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1185489685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2324344621,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4491194936,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 8801872272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 17060032408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 31673122521,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 61298755123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4482765350,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13444884683,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.85,
            "unit": "ns/op",
            "extra": "17689168 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.076,
            "unit": "ns/op",
            "extra": "148787443 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.16,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.73,
            "unit": "ns/op",
            "extra": "67689358 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2764,
            "unit": "ns/op",
            "extra": "414558 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.521,
            "unit": "ns/op",
            "extra": "159744720 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12192,
            "unit": "ns/op",
            "extra": "98408 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.963,
            "unit": "ns/op",
            "extra": "240175040 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.017,
            "unit": "ns/op",
            "extra": "239024120 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.872,
            "unit": "ns/op",
            "extra": "245636373 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.215,
            "unit": "ns/op",
            "extra": "372973538 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2841,
            "unit": "ns/op",
            "extra": "427638 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.22,
            "unit": "ns/op",
            "extra": "53805829 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.26,
            "unit": "ns/op",
            "extra": "39662929 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 32.54,
            "unit": "ns/op",
            "extra": "36897949 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12086,
            "unit": "ns/op",
            "extra": "99060 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 32.07,
            "unit": "ns/op",
            "extra": "37431760 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.67,
            "unit": "ns/op",
            "extra": "29508055 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 6180,
            "unit": "ns/op",
            "extra": "183429 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183429 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183429 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 12015,
            "unit": "ns/op",
            "extra": "96313 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96313 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96313 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 23685,
            "unit": "ns/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50503 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 64596,
            "unit": "ns/op",
            "extra": "18543 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18543 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18543 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 158667,
            "unit": "ns/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6978 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 366984,
            "unit": "ns/op",
            "extra": "3214 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3214 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3214 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 806464,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1683746,
            "unit": "ns/op",
            "extra": "709 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "709 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "709 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3487804,
            "unit": "ns/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 9187649230,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827052008,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123220,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ceac2650f699d20bf1a834da650385d4f25ba773",
          "message": "ipa: support in-domain evaluations (#64)\n\n* ipa: support in-domain evaluations\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* ipa: add tests for in-domain evaluations\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-10-15T19:46:53+01:00",
          "tree_id": "2495b5fc25acb256590e5c9227deb6ce336133af",
          "url": "https://github.com/crate-crypto/go-ipa/commit/ceac2650f699d20bf1a834da650385d4f25ba773"
        },
        "date": 1697395889235,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 836236,
            "unit": "ns/op",
            "extra": "1466 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1231185,
            "unit": "ns/op",
            "extra": "1017 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1904964,
            "unit": "ns/op",
            "extra": "584 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3205611,
            "unit": "ns/op",
            "extra": "378 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5400689,
            "unit": "ns/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9217298,
            "unit": "ns/op",
            "extra": "126 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 16647652,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30441540,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 53760610,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 99309634,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 178868981,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 330670719,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 627588992,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1170022501,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2301994078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4393539035,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 8688245898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 16964432145,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 31523075890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 60960836867,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4409685363,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13222972884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.92,
            "unit": "ns/op",
            "extra": "17713724 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.075,
            "unit": "ns/op",
            "extra": "148623117 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.13,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.7,
            "unit": "ns/op",
            "extra": "67012566 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2819,
            "unit": "ns/op",
            "extra": "452964 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.476,
            "unit": "ns/op",
            "extra": "160903186 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12378,
            "unit": "ns/op",
            "extra": "96978 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.99,
            "unit": "ns/op",
            "extra": "240149029 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.037,
            "unit": "ns/op",
            "extra": "238358192 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.873,
            "unit": "ns/op",
            "extra": "246456471 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.215,
            "unit": "ns/op",
            "extra": "373351749 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2765,
            "unit": "ns/op",
            "extra": "431146 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.84,
            "unit": "ns/op",
            "extra": "53004558 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.33,
            "unit": "ns/op",
            "extra": "39566332 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 32.43,
            "unit": "ns/op",
            "extra": "36963222 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12081,
            "unit": "ns/op",
            "extra": "95848 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 31.98,
            "unit": "ns/op",
            "extra": "37398434 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.39,
            "unit": "ns/op",
            "extra": "29686690 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 6189,
            "unit": "ns/op",
            "extra": "183792 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183792 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183792 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 11997,
            "unit": "ns/op",
            "extra": "96661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 24340,
            "unit": "ns/op",
            "extra": "50569 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50569 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50569 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 64216,
            "unit": "ns/op",
            "extra": "18638 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18638 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18638 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 158676,
            "unit": "ns/op",
            "extra": "7323 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7323 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7323 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 366722,
            "unit": "ns/op",
            "extra": "3208 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3208 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3208 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 806693,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1681604,
            "unit": "ns/op",
            "extra": "705 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "705 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "705 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3501859,
            "unit": "ns/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 8977012563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827051944,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123218,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ceac2650f699d20bf1a834da650385d4f25ba773",
          "message": "ipa: support in-domain evaluations (#64)\n\n* ipa: support in-domain evaluations\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n* ipa: add tests for in-domain evaluations\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-10-15T19:46:53+01:00",
          "tree_id": "2495b5fc25acb256590e5c9227deb6ce336133af",
          "url": "https://github.com/crate-crypto/go-ipa/commit/ceac2650f699d20bf1a834da650385d4f25ba773"
        },
        "date": 1697395889235,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 836236,
            "unit": "ns/op",
            "extra": "1466 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1231185,
            "unit": "ns/op",
            "extra": "1017 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1904964,
            "unit": "ns/op",
            "extra": "584 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3205611,
            "unit": "ns/op",
            "extra": "378 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5400689,
            "unit": "ns/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9217298,
            "unit": "ns/op",
            "extra": "126 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 16647652,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30441540,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 53760610,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 99309634,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 178868981,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 330670719,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 627588992,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1170022501,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2301994078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4393539035,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 8688245898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 16964432145,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 31523075890,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 60960836867,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4409685363,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13222972884,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 67.92,
            "unit": "ns/op",
            "extra": "17713724 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.075,
            "unit": "ns/op",
            "extra": "148623117 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.13,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 17.7,
            "unit": "ns/op",
            "extra": "67012566 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2819,
            "unit": "ns/op",
            "extra": "452964 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 7.476,
            "unit": "ns/op",
            "extra": "160903186 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 12378,
            "unit": "ns/op",
            "extra": "96978 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.99,
            "unit": "ns/op",
            "extra": "240149029 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 5.037,
            "unit": "ns/op",
            "extra": "238358192 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.873,
            "unit": "ns/op",
            "extra": "246456471 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.215,
            "unit": "ns/op",
            "extra": "373351749 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2765,
            "unit": "ns/op",
            "extra": "431146 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 22.84,
            "unit": "ns/op",
            "extra": "53004558 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 30.33,
            "unit": "ns/op",
            "extra": "39566332 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 32.43,
            "unit": "ns/op",
            "extra": "36963222 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12081,
            "unit": "ns/op",
            "extra": "95848 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 31.98,
            "unit": "ns/op",
            "extra": "37398434 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 40.39,
            "unit": "ns/op",
            "extra": "29686690 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 6189,
            "unit": "ns/op",
            "extra": "183792 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183792 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183792 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 11997,
            "unit": "ns/op",
            "extra": "96661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96661 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 24340,
            "unit": "ns/op",
            "extra": "50569 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50569 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50569 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 64216,
            "unit": "ns/op",
            "extra": "18638 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18638 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18638 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 158676,
            "unit": "ns/op",
            "extra": "7323 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7323 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7323 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 366722,
            "unit": "ns/op",
            "extra": "3208 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3208 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3208 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 806693,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1681604,
            "unit": "ns/op",
            "extra": "705 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "705 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "705 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3501859,
            "unit": "ns/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "342 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 8977012563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827051944,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 123218,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff2c8f728e84fc210c9bbf90d3528a3f4b252c35",
          "message": "precomp: use normalized extended points (#59)\n\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-10-21T15:34:27+01:00",
          "tree_id": "3c843cb4d7feaa3576e5ad8d0e6f7dbc635808fa",
          "url": "https://github.com/crate-crypto/go-ipa/commit/ff2c8f728e84fc210c9bbf90d3528a3f4b252c35"
        },
        "date": 1697899075022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 688806,
            "unit": "ns/op",
            "extra": "1708 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 980722,
            "unit": "ns/op",
            "extra": "1234 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1562741,
            "unit": "ns/op",
            "extra": "763 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 2582444,
            "unit": "ns/op",
            "extra": "464 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 4574418,
            "unit": "ns/op",
            "extra": "268 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 7388114,
            "unit": "ns/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 13454074,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 24520830,
            "unit": "ns/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 43471936,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 79532960,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 146178794,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 280572850,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 528377839,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1030365746,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2030193863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 3879712864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 7665987113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 15003574299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 28060369695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 54622536864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 3866675539,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 11692404246,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 62.78,
            "unit": "ns/op",
            "extra": "19135338 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 6.402,
            "unit": "ns/op",
            "extra": "187755844 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 8.753,
            "unit": "ns/op",
            "extra": "136997383 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 14.14,
            "unit": "ns/op",
            "extra": "78945451 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2448,
            "unit": "ns/op",
            "extra": "467322 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 6.573,
            "unit": "ns/op",
            "extra": "182528769 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 9414,
            "unit": "ns/op",
            "extra": "125294 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.07,
            "unit": "ns/op",
            "extra": "294177972 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 4.612,
            "unit": "ns/op",
            "extra": "260873329 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.372,
            "unit": "ns/op",
            "extra": "272716150 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.401,
            "unit": "ns/op",
            "extra": "352822209 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2526,
            "unit": "ns/op",
            "extra": "475729 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 16.76,
            "unit": "ns/op",
            "extra": "71660254 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 22.5,
            "unit": "ns/op",
            "extra": "50303992 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 22.36,
            "unit": "ns/op",
            "extra": "52271284 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 9494,
            "unit": "ns/op",
            "extra": "124780 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 22.23,
            "unit": "ns/op",
            "extra": "52886382 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 38.04,
            "unit": "ns/op",
            "extra": "31052983 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 4305,
            "unit": "ns/op",
            "extra": "272485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "272485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "272485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 8319,
            "unit": "ns/op",
            "extra": "136156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "136156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "136156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 16425,
            "unit": "ns/op",
            "extra": "73125 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "73125 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "73125 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 45817,
            "unit": "ns/op",
            "extra": "26083 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26083 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26083 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 119254,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 268609,
            "unit": "ns/op",
            "extra": "4437 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4437 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4437 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 568426,
            "unit": "ns/op",
            "extra": "2103 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2103 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2103 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1222224,
            "unit": "ns/op",
            "extra": "973 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "973 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "973 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 2560451,
            "unit": "ns/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 1268585365,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827317552,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 115118,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff2c8f728e84fc210c9bbf90d3528a3f4b252c35",
          "message": "precomp: use normalized extended points (#59)\n\n\r\n---------\r\n\r\nSigned-off-by: Ignacio Hagopian <jsign.uy@gmail.com>",
          "timestamp": "2023-10-21T15:34:27+01:00",
          "tree_id": "3c843cb4d7feaa3576e5ad8d0e6f7dbc635808fa",
          "url": "https://github.com/crate-crypto/go-ipa/commit/ff2c8f728e84fc210c9bbf90d3528a3f4b252c35"
        },
        "date": 1697899075022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 688806,
            "unit": "ns/op",
            "extra": "1708 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 980722,
            "unit": "ns/op",
            "extra": "1234 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 1562741,
            "unit": "ns/op",
            "extra": "763 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 2582444,
            "unit": "ns/op",
            "extra": "464 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 4574418,
            "unit": "ns/op",
            "extra": "268 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 7388114,
            "unit": "ns/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 13454074,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 24520830,
            "unit": "ns/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 43471936,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 79532960,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 146178794,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 280572850,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 528377839,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1030365746,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2030193863,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 3879712864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 7665987113,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 15003574299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 28060369695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 54622536864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 3866675539,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 11692404246,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 62.78,
            "unit": "ns/op",
            "extra": "19135338 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 6.402,
            "unit": "ns/op",
            "extra": "187755844 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 8.753,
            "unit": "ns/op",
            "extra": "136997383 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 14.14,
            "unit": "ns/op",
            "extra": "78945451 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 2448,
            "unit": "ns/op",
            "extra": "467322 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 6.573,
            "unit": "ns/op",
            "extra": "182528769 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 9414,
            "unit": "ns/op",
            "extra": "125294 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 4.07,
            "unit": "ns/op",
            "extra": "294177972 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 4.612,
            "unit": "ns/op",
            "extra": "260873329 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 4.372,
            "unit": "ns/op",
            "extra": "272716150 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 3.401,
            "unit": "ns/op",
            "extra": "352822209 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 2526,
            "unit": "ns/op",
            "extra": "475729 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 16.76,
            "unit": "ns/op",
            "extra": "71660254 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 22.5,
            "unit": "ns/op",
            "extra": "50303992 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 22.36,
            "unit": "ns/op",
            "extra": "52271284 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 9494,
            "unit": "ns/op",
            "extra": "124780 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 22.23,
            "unit": "ns/op",
            "extra": "52886382 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 38.04,
            "unit": "ns/op",
            "extra": "31052983 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 4305,
            "unit": "ns/op",
            "extra": "272485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "272485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "272485 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 8319,
            "unit": "ns/op",
            "extra": "136156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "136156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "136156 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 16425,
            "unit": "ns/op",
            "extra": "73125 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "73125 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "73125 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 45817,
            "unit": "ns/op",
            "extra": "26083 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26083 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26083 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 119254,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 268609,
            "unit": "ns/op",
            "extra": "4437 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4437 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4437 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 568426,
            "unit": "ns/op",
            "extra": "2103 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2103 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2103 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1222224,
            "unit": "ns/op",
            "extra": "973 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "973 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "973 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 2560451,
            "unit": "ns/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 1268585365,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827317552,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 115118,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d609c21c7a9b2f5d2ef9d03499bfed7ce7c4efab",
          "message": "Merge pull request #63 from crate-crypto/jsign-proof-benchmarks\n\nmultiproof: improve performance of prover and verifier",
          "timestamp": "2023-10-23T16:14:19-03:00",
          "tree_id": "8ecee65176df20f02cd40b2bae8054e155935d18",
          "url": "https://github.com/crate-crypto/go-ipa/commit/d609c21c7a9b2f5d2ef9d03499bfed7ce7c4efab"
        },
        "date": 1698089276858,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkProofGeneration/numopenings=2000",
            "value": 76540890,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkProofGeneration/numopenings=16000",
            "value": 167276278,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkProofGeneration/numopenings=32000",
            "value": 283735437,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkProofGeneration/numopenings=64000",
            "value": 490610574,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkProofGeneration/numopenings=128000",
            "value": 934315478,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkProofVerification/numopenings=2000",
            "value": 27761459,
            "unit": "ns/op",
            "extra": "44 times\n2 procs"
          },
          {
            "name": "BenchmarkProofVerification/numopenings=16000",
            "value": 135537141,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkProofVerification/numopenings=32000",
            "value": 247707209,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkProofVerification/numopenings=64000",
            "value": 454849788,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkProofVerification/numopenings=128000",
            "value": 875057227,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32_points",
            "value": 876581,
            "unit": "ns/op",
            "extra": "1357 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/64_points",
            "value": 1303687,
            "unit": "ns/op",
            "extra": "993 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/128_points",
            "value": 2038808,
            "unit": "ns/op",
            "extra": "555 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/256_points",
            "value": 3386126,
            "unit": "ns/op",
            "extra": "350 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/512_points",
            "value": 5591419,
            "unit": "ns/op",
            "extra": "217 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1024_points",
            "value": 9551482,
            "unit": "ns/op",
            "extra": "123 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2048_points",
            "value": 17326341,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4096_points",
            "value": 30474512,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8192_points",
            "value": 55124642,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16384_points",
            "value": 99004352,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/32768_points",
            "value": 187971032,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/65536_points",
            "value": 347064324,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/131072_points",
            "value": 663386322,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/262144_points",
            "value": 1227015363,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/524288_points",
            "value": 2363804403,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/1048576_points",
            "value": 4661800128,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/2097152_points",
            "value": 9217474826,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/4194304_points",
            "value": 18418391224,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/8388608_points",
            "value": 34650905135,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1/16777216_points",
            "value": 67076848883,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkMultiExpG1Reference",
            "value": 4589608151,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkManyMultiExpG1Reference",
            "value": 13867018457,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSetBytes",
            "value": 81.09,
            "unit": "ns/op",
            "extra": "15004788 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy3",
            "value": 8.113,
            "unit": "ns/op",
            "extra": "148116226 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy5",
            "value": 11.08,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMulByConstants/mulBy13",
            "value": 18.53,
            "unit": "ns/op",
            "extra": "65067145 times\n2 procs"
          },
          {
            "name": "BenchmarkElementInverse",
            "value": 3330,
            "unit": "ns/op",
            "extra": "386233 times\n2 procs"
          },
          {
            "name": "BenchmarkElementButterfly",
            "value": 9.342,
            "unit": "ns/op",
            "extra": "127157544 times\n2 procs"
          },
          {
            "name": "BenchmarkElementExp",
            "value": 11735,
            "unit": "ns/op",
            "extra": "102457 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDouble",
            "value": 5.679,
            "unit": "ns/op",
            "extra": "205648058 times\n2 procs"
          },
          {
            "name": "BenchmarkElementAdd",
            "value": 6.379,
            "unit": "ns/op",
            "extra": "195813387 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSub",
            "value": 6.202,
            "unit": "ns/op",
            "extra": "204512838 times\n2 procs"
          },
          {
            "name": "BenchmarkElementNeg",
            "value": 4.323,
            "unit": "ns/op",
            "extra": "275740902 times\n2 procs"
          },
          {
            "name": "BenchmarkElementDiv",
            "value": 3315,
            "unit": "ns/op",
            "extra": "378271 times\n2 procs"
          },
          {
            "name": "BenchmarkElementFromMont",
            "value": 20.35,
            "unit": "ns/op",
            "extra": "59509141 times\n2 procs"
          },
          {
            "name": "BenchmarkElementToMont",
            "value": 28.22,
            "unit": "ns/op",
            "extra": "38495174 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSquare",
            "value": 27.93,
            "unit": "ns/op",
            "extra": "38964284 times\n2 procs"
          },
          {
            "name": "BenchmarkElementSqrt",
            "value": 12159,
            "unit": "ns/op",
            "extra": "95674 times\n2 procs"
          },
          {
            "name": "BenchmarkElementMul",
            "value": 27.72,
            "unit": "ns/op",
            "extra": "43843454 times\n2 procs"
          },
          {
            "name": "BenchmarkElementCmp",
            "value": 45.87,
            "unit": "ns/op",
            "extra": "27121357 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - ns/op",
            "value": 5331,
            "unit": "ns/op",
            "extra": "222750 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222750 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=1/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222750 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - ns/op",
            "value": 10568,
            "unit": "ns/op",
            "extra": "111928 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "111928 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=2/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "111928 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - ns/op",
            "value": 21152,
            "unit": "ns/op",
            "extra": "57514 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57514 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=4/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57514 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - ns/op",
            "value": 58472,
            "unit": "ns/op",
            "extra": "20866 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20866 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=8/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20866 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - ns/op",
            "value": 148914,
            "unit": "ns/op",
            "extra": "7998 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7998 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=16/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7998 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - ns/op",
            "value": 342269,
            "unit": "ns/op",
            "extra": "3438 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3438 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=32/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3438 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - ns/op",
            "value": 731716,
            "unit": "ns/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=64/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1669 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - ns/op",
            "value": 1562619,
            "unit": "ns/op",
            "extra": "722 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "722 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=128/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "722 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - ns/op",
            "value": 3189112,
            "unit": "ns/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompMSM/msm_length=256/precomp - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - ns/op",
            "value": 1651376740,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - B/op",
            "value": 827312944,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkPrecompInitialize - allocs/op",
            "value": 115120,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}