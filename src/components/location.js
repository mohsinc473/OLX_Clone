/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      blurOnSelect="mouse"
      renderInput={(params) => <TextField {...params} color="secondary" margin="normal" type="search" 
      variant="outlined" />
    }
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
{
    title: "Karachi", 
}, 
{
    title: "Lahore", 
}, 
{
    title: "Faisal\u0101b\u0101d", 
}, 
{
    title: "Serai", 
}, 
{
    title: "R\u0101walpindi", 
}, 
{
    title: "Mult\u0101n", 
}, 
{
    title: "Gujr\u0101nw\u0101la", 
}, 
{
    title: "Hyder\u0101b\u0101d City", 
}, 
{
    title: "Pesh\u0101war", 
}, 
{
    title: "Abbott\u0101b\u0101d", 
}, 
{
    title: "Islamabad", 
}, 
{
    title: "Quetta", 
}, 
{
    title: "Bannu", 
}, 
{
    title: "Bah\u0101walpur", 
}, 
{
    title: "Sargodha", 
}, 
{
    title: "Si\u0101lkot City", 
}, 
{
    title: "Sukkur", 
}, 
{
    title: "L\u0101rk\u0101na", 
}, 
{
    title: "Sheikhupura", 
}, 
{
    title: "M\u012brpur Kh\u0101s", 
}, 
{
    title: "Rah\u012bmy\u0101r Kh\u0101n", 
}, 
{
    title: "Koh\u0101t", 
}, 
{
    title: "Jhang Sadr", 
}, 
{
    title: "Gujr\u0101t", 
}, 
{
    title: "Bard\u0101r", 
}, 
{
    title: "Kas\u016br", 
}, 
{
    title: "Dera Gh\u0101zi Kh\u0101n", 
}, 
{
    title: "Mas\u012bw\u0101la", 
}, 
{
    title: "Naw\u0101bsh\u0101h", 
}, 
{
    title: "Ok\u0101ra", 
}, 
{
    title: "Gilgit", 
}, 
{
    title: "Chiniot", 
}, 
{
    title: "S\u0101diq\u0101b\u0101d", 
}, 
{
    title: "Turbat", 
}, 
{
    title: "Dera Ism\u0101\u012bl Kh\u0101n", 
}, 
{
    title: "Chaman", 
}, 
{
    title: "Zhob", 
}, 
{
    title: "Mehra", 
}, 
{
    title: "Parachin\u0101r", 
}, 
{
    title: "Gw\u0101dar", 
}, 
{
    title: "Kundi\u0101n", 
}, 
{
    title: "Shahd\u0101d Kot", 
}, 
{
    title: "Har\u012bpur", 
}, 
{
    title: "Mati\u0101ri", 
}, 
{
    title: "Dera All\u0101hy\u0101r", 
}, 
{
    title: "Lodhr\u0101n", 
}, 
{
    title: "Batgr\u0101m", 
}, 
{
    title: "Thatta", 
}, 
{
    title: "B\u0101gh", 
}, 
{
    title: "Bad\u012bn", 
}, 
{
    title: "M\u0101nsehra", 
}, 
{
    title: "Zi\u0101rat", 
}, 
{
    title: "Muzaffargarh", 
}, 
{
    title: "Tando All\u0101hy\u0101r", 
}, 
{
    title: "Dera Mur\u0101d Jam\u0101li", 
}, 
{
    title: "Karak", 
}, 
{
    title: "Mardan", 
}, 
{
    title: "Uthal", 
}, 
{
    title: "Nank\u0101na S\u0101hib", 
}, 
{
    title: "B\u0101rkh\u0101n", 
}, 
{
    title: "H\u0101fiz\u0101b\u0101d", 
}, 
{
    title: "Kotli", 
}, 
{
    title: "Loralai", 
}, 
{
    title: "Dera Bugti",
}, 
{
    title: "Jhang City", 
}, 
{
    title: "S\u0101h\u012bw\u0101l", 
}, 
{
    title: "S\u0101nghar", 
}, 
{
    title: "P\u0101kpattan", 
}, 
{
    title: "Chakw\u0101l", 
}, 
{
    title: "Khush\u0101b", 
}, 
{
    title: "Ghotki", 
}, 
{
    title: "Kohlu", 
}, 
{
    title: "Khuzd\u0101r", 
}, 
{
    title: "Aw\u0101r\u0101n", 
}, 
{
    title: "Nowshera", 
}, 
{
    title: "Ch\u0101rsadda", 
}, 
{
    title: "Qila Abdull\u0101h", 
}, 
{
    title: "Bah\u0101walnagar", 
}, 
{
    title: "D\u0101du", 
}, 
{
    title: "Al\u012b\u0101bad", 
}, 
{
    title: "Lakki Marwat", 
}, 
{
    title: "Chil\u0101s", 
}, 
{
    title: "Pishin", 
}, 
{
    title: "T\u0101nk", 
}, 
{
    title: "Chitr\u0101l", 
}, 
{
    title: "Qila Saifull\u0101h", 
}, 
{
    title: "Shik\u0101rpur", 
}, 
{
    title: "Panjg\u016br", 
}, 
{
    title: "Mastung", 
}, 
{
    title: "Kal\u0101t", 
}, 
{
    title: "Gand\u0101v\u0101", 
}, 
{
    title: "Kh\u0101new\u0101l", 
}, 
{
    title: "N\u0101row\u0101l", 
}, 
{
    title: "Khairpur",
}, 
{
    title: "Malakand", 
}, 
{
    title: "Vih\u0101ri", 
}, 
{
    title: "Saidu Sharif", 
}, 
{
    title: "Jhelum", 
}, 
{
    title: "Mandi Bah\u0101udd\u012bn", 
}, 
{
    title: "Bhakkar", 
}, 
{
    title: "Toba Tek Singh", 
}, 
{
    title: "J\u0101mshoro", 
}, 
{
    title: "Kh\u0101r\u0101n", 
}, 
{
    title: "Umarkot", 
}, 
{
    title: "Hangu", 
}, 
{
    title: "Timargara", 
}, 
{
    title: "G\u0101kuch", 
}, 
{
    title: "Jacob\u0101b\u0101d", 
},
{
    title: "Alp\u016brai", 
}, 
{
    title: "Mi\u0101nw\u0101li", 
}, 
{
    title: "M\u016bsa Khel B\u0101z\u0101r", 
}, 
{
    title: "Naushahro F\u012broz", 
}, 
{
    title: "New M\u012brpur", 
}, 
{
    title: "Daggar", 
}, 
{
    title: "Eidg\u0101h", 
}, 
{
    title: "Sibi", 
}, 
{
    title: "D\u0101lband\u012bn", 
}, 
{
    title: "R\u0101janpur", 
}, 
{
    title: "Leiah", 
}, 
{
    title: "Upper Dir", 
}, 
{
    title: "Tando Muhammad Kh\u0101n", 
}, 
{
    title: "Attock City", 
}, 
{
    title: "R\u0101wala Kot", 
}, 
{
    title: "Sw\u0101bi", 
}, 
{
    title: "Kandhkot", 
},
{
    title: "Dasu", 
}, 
{
    title: "Athmuqam", 
}
];







