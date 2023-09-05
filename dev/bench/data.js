window.BENCHMARK_DATA = {
  "lastUpdate": 1693940885801,
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
      }
    ]
  }
}