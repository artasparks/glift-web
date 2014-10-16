// This is not included in the compiled otre client file.
if (testdata === undefined) var testdata = {};

testdata.sgfs = {
  base:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\n" +
    "RU[Japanese]SZ[19]KM[0.00]\n" +
    "PW[White]PB[Black])",

  veryeasy:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\n" +
    "RU[Japanese]SZ[19]KM[0.00]\n" +
    "PW[j]PB[j]AW[ef]\n" +
    ";B[pd]\n" +
    ";W[cc]\n" +
    ";B[qf]\n" +
    ";W[nc]\n" +
    ";B[dd]\n" +
    ";W[pb])",

  easy:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]" +
    "RU[Japanese]SZ[19]KM[0.00]" +
    "PW[White]PB[Black]AW[pa][pb][sb][pc][qc][sc][qd][rd][sd]AB[oa][qa][ob][rb][oc][rc][pd][pe][qe][re][se]C[\\\\] Black to Live]" +
    "" +
    "(;B[sa];W[ra]C[Ko])" +
    "(;B[ra]C[Correct];W[]C[And if white thinks it is seki?]" +
    "  (;B[qb]C[Correct.];W[sa];B[rb]C[Black lives])" +
    "  (;B[sa];W[qb];B[ra];W[rb]C[White Lives])" +
    ")" +
    "(;B[qb];W[ra]C[White lives]))",

  marky:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\n" +
    "RU[Japanese]SZ[19]KM[0.00]\n" +
    "PW[White]PB[Black]CR[rb][rc][re]AB[pc][qd][pe]" +
    "[re]LB[pb:3][qb:2][pc:B][qc:1][pd:A]TR[qd][qe]SQ[rd]\n" +
    ";B[sa]TR[qa]C[bar]\n" +
    ";W[fi]SQ[ab]C[foo])",

  trivialproblem:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\n" +
    "RU[Japanese]SZ[19]KM[0.00]\n" +
    "PW[White]PB[Black]GB[1]AW[pb][mc][pc][qd][rd][qf][pg][qg]" +
    "AB[jc][oc][qc][pd][pe][pf])",

  realproblem:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\n" +
    "RU[Japanese]SZ[19]KM[0.00]\n" +
    "PW[White]PB[Black]AW[pb][mc][pc][qd][rd][qf][pg][qg]\n" +
    "AB[jc][oc][qc][pd][pe][pf]\n" +
    "C[Black to make good shape]\n" + 
    "(;B[ob]C[Bad style.]\n" +
    ";W[qb]\n" +
    "(;B[nd]C[White's stone can easily escape.])\n" +
    "(;B[me]C[Lots of bad aji.]))\n" +
    "(;B[nc]\n" +
    "(;W[qb]\n" +
    ";B[md]C[Correct.  This position is the best Black can hope for.]GB[1])\n" +
    "(;W[md]\n" +
    ";B[qb]GB[1]C[White loses his corner])))",

  complexproblem:
    "(;GM[1]FF[4]CA[UTF-8]AP[Glift]ST[2]\n" +
    "RU[Japanese]SZ[19]KM[0.00]\n" +
    "C[Black to play. There aren't many options " +
    "to choose from, but you might be surprised at the answer!]" +
    "PW[White]PB[Black]AW[pa][qa][nb][ob][qb][oc][pc][md][pd][ne][oe]\n" +
    "AB[na][ra][mb][rb][lc][qc][ld][od][qd][le][pe][qe][mf][nf][of][pg]\n" +
    "(;B[mc]\n" +
    ";W[nc]C[White lives.])\n" +
    "(;B[ma]\n" +

    "(;W[oa]\n" +
      ";B[nc]\n" +
      ";W[nd]\n" +
      ";B[mc]GB[1]C[White dies.])\n" +

    "(;W[mc]\n" +
      "(;B[oa]\n" +
        ";W[nd]\n" +
        ";B[pb]C[White lives])\n" +
      "(;B[nd]\n" +
        ";W[nc]\n" +
        ";B[oa]GB[1]C[White dies.]))\n" +

    "(;W[nd]\n" +
      ";B[mc]\n" +
      ";W[oa]\n" +
      ";B[nc]GB[1]C[White dies.])))",

  marktest:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]" +
    "RU[Japanese]SZ[19]KM[0.00]" +
    "PW[White]PB[Black]" +
    "C[This is meant to show some of the supported visual elements in Glift.\n\n" +
    "In particular:\n - Triangle Marks\n - Square Marks\n - Circle Marks\n - X Marks\n - Alphanumeric Labels\n - Unicode Labels]" +
    "AW[na][oa][pa][qa][ra][sa][ka][la][ma][ja]" +
    "AB[nb][ob][pb][qb][rb][sb][kb][lb][mb][jb]" +

    // Label
    "LB[pa:A][ob:2][pb:B][pc:C][pd:D]" +
    "[oa:1][oc:3][ne:9][oe:8][pe:7][qe:6][re:5][se:4]" +
    "[nf:15][of:14][pf:13][qf:11][rf:12][sf:10]" +
    "[ng:22][og:44][pg:100]" +
    "[ka:a][kb:b][kc:c][kd:d][ke:e][kf:f][kg:g]" +

    // Unicode labels [japanese unicode numbers
    "[ma:\u4e00][mb:\u4e8c][mc:\u4e09][md:\u56db][me:\u4e94]" +
    "[la:\u516d][lb:\u4e03][lc:\u516b][ld:\u4e5d][le:\u5341]" +
    // Mark
    "MA[na][nb][nc]" +
    // Circle
    "CR[qa][qb][qc]" +
    // Triangle
    "TR[sa][sb][sc]" +
    // Square
    "SQ[ra][rb][rc]" +
    ")",

  gogameguru_hard: "(;GM[2]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.00]C[A problem from GoGameGuru]AW[po][qo][ro][so][np][op][pq][nr][pr][qr][rs]AB[qm][on][pn][oo][pp][qp][rp][sp][qq][rr][qs](;B[sr](;W[rq];B[sq];W[ps];B[rn]C[Correct])(;W[ps](;B[rn];W[rq];B[sq];W[qs](;B[sn]C[Correct])(;B[qn]C[Correct]))(;B[qn];W[rq];B[sq];W[qs];B[rn]C[Correct])(;B[sn];W[rq];B[sq];W[qs];B[rn]C[Correct])))(;B[sq];W[ps](;B[rn];W[sr];B[ss]C[It's a ko, but black can do better.])(;B[sr];W[qs];B[rn];W[ss])(;B[qn];W[sr];B[ss]C[It's a ko, but black can do better.])(;B[sn];W[sr];B[ss]C[It's a ko, but black can do better.]))(;B[ss];W[sq];B[rq];W[ps](;B[rn];W[rs]C[It's a ko, but black can do better.])(;B[qn];W[rs]C[It's a ko, but black can do better.])(;B[sn];W[rs]C[It's a ko, but black can do better.]))(;B[rq];W[ps](;B[sr];W[qs](;B[rn];W[ss])(;B[qn];W[ss]))(;B[rn];W[sr])(;B[qn];W[sr]))(;B[rn];W[sq])(;B[qn];W[sq])(;B[sn];W[sq]))",

  chenyaoye_tanxiao: "(;FF[4]GM[1]SZ[19]CA[UTF-8]SO[Glift]EV[]PB[Chen Yaoye]BR[9p]PW[Tan Xiao]WR[7p]KM[7.5]DT[2013-11-18]RE[B+0.5];B[qd];W[dc];B[pq];W[dq];B[nc];W[co];B[qk];W[jp];B[de];W[cg];B[cc];W[gc];B[dd];W[db];B[fd];W[hc];B[cf];W[dh];B[cb];W[mp];B[po];W[kc];B[dk];W[bf];B[be];W[df];B[ce];W[dm];B[fk];W[gh];B[hk];W[gn];B[hq];W[jq];B[eq];W[dr];B[io];W[im];B[jo];W[ko];B[jm];W[jn];B[in];W[kn];B[hm];W[il];B[hl];W[od];B[jk];W[oc];B[pf];W[hp];B[do];W[eo];B[ip];W[iq];B[gp];W[ho];B[hn];W[go];B[en];W[gq];B[fo];W[fp];B[ep];W[dp];B[cn];W[dn];B[bo];W[eo];B[kd];W[lc];B[do];W[cp];B[cm];W[em];B[fm];W[fn];B[nf];W[qm];B[pl];W[qp];B[pp];W[qo];B[qq];W[pm];B[om];W[rk];B[rj];W[rl];B[qj];W[rn];B[nd];W[oe];B[ne];W[qc];B[rc];W[of];B[og];W[nb];B[mb];W[pb];B[na];W[ob];B[mc];W[rb];B[jc];W[jb];B[jd];W[ib];B[he];W[ff];B[bh];W[ig];B[ec];W[eb];B[ld];W[fe];B[eg];W[eh];B[fb];W[fc];B[fg];W[gg];B[ef];W[fh];B[ee];W[ij];B[ik];W[ed];B[gf];W[ci];B[bg];W[ji];B[ec];W[gb];B[if];W[kj];B[ih];W[jh];B[hg];W[hh];B[jg];W[ii];B[ig];W[lk];B[ll];W[ml];B[lm];W[nl];B[nn];W[nj];B[ol];W[nh];B[kh];W[lh];B[lg];W[oh];B[pg];W[mi];B[rd];W[pd];B[sb];W[ra];B[da];W[ed];B[qb];W[qa];B[ec];W[fa];B[mr];W[ki];B[rp];W[ro];B[rq];W[pn];B[kr];W[lq];B[lr];W[nq];B[nr];W[qi];B[qh];W[ri];B[pi];W[rh];B[rg];W[ph];B[qg];W[pj];B[sh];W[oi];B[si];W[bp];B[hs];W[hr];B[js];W[gs];B[an];W[bi];B[bk];W[kg];B[ap];W[bq];B[kb];W[pi];B[pe];W[sk];B[sj];W[fl];B[gm];W[ek];B[ej];W[el];B[gj];W[dj];B[cj];W[di];B[dl];W[eo];B[bj];W[mn];B[ln];W[mo];B[lo];W[kp];B[hj];W[cl];B[ck];W[hi];B[gl];W[kk];B[kl];W[bl];B[bm];W[al];B[am];W[ai];B[ak];W[aq];B[ao];W[lf];B[mg];W[ng];B[mf];W[on];B[nm];W[mm];B[no];W[oo];B[sc];W[kf];B[gd];W[is];B[jr];W[ok];B[dg];W[ch];B[ja];W[ia];B[ka];W[ma];B[la];W[le];B[so];W[sn];B[sp];W[oq];B[or];W[oa];B[ma];W[me];B[jf];W[id];B[ke];W[ah];B[af];W[ie];B[je];W[ir];B[ed];W[ag];B[bf];W[ea];B[ca];W[kh];B[md];W[pk];B[ql];W[lp];B[sg];W[np];B[jl];W[ei];B[fj];W[ic])"
};
