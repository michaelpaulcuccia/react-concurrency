"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import TextField from './components/TextField';
import List from './components/List';
import Spinner from './components/Spinner';

export default function Home() {

  const [filterText, setFilterText] = useState('');
  const [items, setItems] = useState(['yozVNnnlzeZ', 'SqyPkcwKENWV', 'suDbBfjdtcZG', 'TTENTJPNwG', 'dCyLlkxEEiGk', 'rfxSdOHOoEd', 'hXuPouIg', 'xdFtMwccgqMi', 'XUBSelvjIwi', 'nODmqAD', 'urfudvp', 'WnAoaib', 'VBELJHFERoK', 'DGRUdVvqFcK', 'gPECbrQl', 'oVqmvXYHzQ', 'IDRtTDINNnNf', 'IZlWFgCtL', 'veLBQjb', 'jKXxgykYokp', 'OqrXwGGwusqR', 'suHIqkHiEO', 'oCxZurza', 'hGsExuGrrHzo', 'VmrrAMjdgoTy', 'JdqpNrMHyPYn', 'XxJWElFET', 'AokBqzBbXn', 'HMMJJVGcC', 'tLRSJBHO', 'ciWKlhbv', 'MSoYlhzOuLyj', 'gYZAaCcK', 'qAsjXQIgM', 'hLaYuZKN', 'JsESiqSnlKQF', 'ZrJzqsLlZye', 'fhqDPEPwx', 'BsadLLUloM', 'gZKQgTo','pqslDkBglUTg', 'gfGQfAbWgn', 'vrIAFfakuW', 'qHBjTqfYfWn', 'agQBtJWir', 'cuOuiagU', 'ivqemDuFyfuQ', 'DqESJLZI', 'cgLtVrXnYSoz', 'UxUGxnm', 'ecBnMiRLNvpb', 'cBsXzdmrV', 'RfutxRyP', 'EsLnPPB', 'EUfoemTylu', 'eiXohovjCTA', 'ZkASzLrc', 'FVhGORKdmqNI', 'sUoYKMQP', 'FDyhUcaHLe', 'AjNWyXcD', 'woIXtIf', 'KJZUQRtuT', 'aRFYQXxT', 'qIvURrzMVHE', 'mdoROSlDx', 'HAslqNNDsmX', 'FlfkROQ', 'iFteQvKNRsW', 'XRSxMHPmQd', 'KXKVOTydQx', 'JARqvENLcvgZ', 'XFTsfaXWJrQo', 'TgZSMbBBbbh', 'cSdSbCAn', 'cEXDOeRm', 'tZLnhndYQWmE', 'gkpHudqlfh', 'HabpyzjkeAIq', 'OVvqEQamD', 'PTJJRsyZhWg', 'NfcxtewxHW', 'pxPWOYoRLVh', 'luaAntF', 'ELhhoRGgN', 'xqPMxVLJm', 'NeSYHYv', 'qJlszwMqEFQ', 'JBkAcnrw', 'ekSAfDb', 'PGrvgMT', 'HKUEyYulxgV', 'GQExKPZDut', 'VOScefz', 'qGCelcpHCSL', 'BuGVWqiZY', 'yZaSmgT', 'ObCavHYwVjEY', 'KYaLplWH', 'MDXAFrLek', 'kYpuDPi', 'eEXvFZasQkOD', 'TTAkslBZ', 'VDZFDCoC', 'ilPNnJZ', 'jwNStowgkIPG', 'mieQsFPLig', 'rnksaEgIm', 'AONFyTXy', 'wgakcZjBRR', 'DidsWLe', 'zveMWGazVg', 'CDbVoiBaZd', 'DUanPgn', 'XKXUyIpPs', 'mJTORtrM', 'EhDSWgof', 'JJvtDZkB', 'SXpsPjj', 'hGonjmKSxsS']);

  return (
    <>
      <div className={styles.main}>
        <Spinner />
        <TextField value={filterText} onChange={setFilterText} />
        <List items={items} filterText={filterText} />
      </div>
    </>
  )
}
